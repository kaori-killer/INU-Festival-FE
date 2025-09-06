import { useEffect, useState } from 'react';

import { styled } from 'styled-components';
import Kakao from '../../utils/CreateKakaoMap';
import Booth from '../../types/Booth';
import BoothDay from '../../types/BoothDay';

const Container = styled.div`
  max-width: 600px;
  z-index: 200;
  width: 100%;
  position: relative;
  height: 400px;
  top: 0;
`;

type MapLayerProps = {
  filteredBooths: Booth[];
  selectedDay: string;
  selectedBooth: Booth[] | null;
  setSelectedBooth: (value: Booth[] | null) => void;
  showMarker: Booth[] | null;
  setShowMarker: (value: Booth[] | null) => void;
};

export default function MapLayer({
  filteredBooths,
  selectedDay,
  selectedBooth,
  setSelectedBooth,
  showMarker,
  setShowMarker,
} : MapLayerProps) {
  const { kakao } = window;

  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    const map = Kakao;
    setKakaoMap(map);
  }, []);

  const moveLatLng = (data) => {
    const newLatLng = new kakao.maps.Coords(data[0], data[1]);
    kakaoMap.panTo(newLatLng);
  };

  const resetMarkers = () => {
    setMarkers((prevMarkers) => {
      prevMarkers.forEach((marker) => marker.setMap(null));
      return [];
    });
    setMarkers(() => []);
  };

  const createMarkers = (booth : Booth) => {
    let uniqueMarker = false;
    booth.boothDays.forEach((boothDay: BoothDay) => {
      if (boothDay.day === selectedDay) {
        const latlang = new kakao.maps.LatLng(booth.x, booth.y);
        const imageSize = new kakao.maps.Size(25, 30.17);
        const imageOption = { offset: new kakao.maps.Point(16, 34) };

        if ((booth.category === '푸드트럭' || booth.category === '플리마켓') && uniqueMarker) {
          return;
        }
        if ((booth.category === '푸드트럭' || booth.category === '플리마켓') && !uniqueMarker) {
          uniqueMarker = true;
          moveLatLng([600, -280]);
        }

        const markerImage = new kakao.maps.MarkerImage(`${booth.markerImage}.svg`, imageSize, imageOption);

        const marker = new kakao.maps.Marker({
          position: latlang,
          title: booth.name,
          image: markerImage,
          clickable: true,
        });
        marker.setMap(null);
        marker.setMap(kakaoMap);
        setMarkers((prevMarkers) => [...prevMarkers, marker]);
        if (booth.category === '푸드트럭' || booth.category === '플리마켓') return;
        if (booth.category !== '푸드트럭' && booth.category !== '플리마켓') {
          moveLatLng([700, -400]);
        }

        kakao.maps.event.addListener(marker, 'click', () => {
          const newMarker: Booth[] = [];
          filteredBooths.forEach((wholeBooth) => {
            if (wholeBooth.name === booth.name || wholeBooth.x === booth.x) {
              newMarker.push(wholeBooth);
            }
          });
          setSelectedBooth(newMarker);
          setMarkers((prevMarkers) => [...prevMarkers, marker]);
        });
      }
    });
  };

  useEffect(() => {
    if (!kakaoMap) return;

    kakao.maps.event.addListener(kakaoMap, 'click', () => {
      setSelectedBooth(null);
      setShowMarker(null);
    });

    resetMarkers();

    const booths: Booth[] = selectedBooth || showMarker || filteredBooths;

    booths.forEach((booth) => {
      createMarkers(booth);
    });
  }, [selectedDay, showMarker, filteredBooths, kakaoMap]);

  useEffect(() => {
    setSelectedBooth(null);
    setShowMarker(null);
  }, [Object.keys(filteredBooths).join()]);

  return (
    <Container id="map" />
  );
}
