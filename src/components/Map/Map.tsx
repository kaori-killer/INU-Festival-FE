import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import MapLayer from './MapLayer';
import BottomSheet from './BannerContent';
import Booth from '../../types/Booth';
import useFetchBooths from '../../hooks/useFetchBooths';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    cursor: grab;
`;

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

export default function Map() {
  const now = new Date();
  const month = now.getDay();
  const day = (WEEKDAY[month] === '화' || WEEKDAY[month] === '수' || WEEKDAY[month] === '목') ? WEEKDAY[month] : '화';
  const booths = useFetchBooths();
  const [selectedDay, setSelectedDay] = useState<string>(localStorage.getItem('day') || day);
  const [selectedCategory, setSelectedCategory] = useState<string>(localStorage.getItem('category') || '비주점');
  const [selectedBooth, setSelectedBooth] = useState<Booth[] | null>(null);
  const [showMarker, setShowMarker] = useState<Booth[] | null>(null);

  const filtered = booths.filter((booth) => {
    const dayCount = booth.boothDays.filter((boothDay) => boothDay.day === selectedDay);
    return dayCount.length && booth.category === selectedCategory;
  });

  let y = '';

  useEffect(() => () => {
    localStorage.setItem('y', y);
  }, []);

  document.addEventListener('scroll', () => {
    y = String(document.documentElement.scrollTop);
  });

  useEffect(() => {
    const newScrollY = Number(localStorage.getItem('y'));
    window.scrollTo(0, newScrollY);
  }, [booths]);

  return (
    <Container>
      <MapLayer
        filteredBooths={filtered}
        selectedDay={selectedDay}
        selectedBooth={selectedBooth}
        setSelectedBooth={setSelectedBooth}
        showMarker={showMarker}
        setShowMarker={setShowMarker}
      />
      <BottomSheet
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        booths={selectedBooth || filtered}
        setShowMarker={setShowMarker}
      />
    </Container>
  );
}
