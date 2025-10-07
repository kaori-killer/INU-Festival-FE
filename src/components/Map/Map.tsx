import { useEffect, useState } from "react";

import styled from "styled-components";

import MapLayer from "./MapLayer";
import BottomSheet from "./BannerContent";
import Booth from "../../types/Booth";
import useFetchBooths from "../../hooks/useFetchBooths";

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  cursor: grab;
`;

const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

export default function Map() {
  const booths = useFetchBooths();
  const [selectedDay, setSelectedDay] = useState<string>(
    localStorage.getItem("day") || "Day 1"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    localStorage.getItem("category") || "비주점"
  );
  const [selectedBooth, setSelectedBooth] = useState<Booth[] | null>(null);
  const [showMarker, setShowMarker] = useState<Booth[] | null>(null);

  const filtered = booths.filter((booth) => {
    const dayCount = booth.boothDays.filter(
      (boothDay) => boothDay.day === selectedDay
    );
    return dayCount.length > 0 && booth.category === selectedCategory;
  });

  // 디버깅용 로그
  console.log("=== 디버깅 정보 ===");
  console.log("전체 부스 수:", booths.length);
  console.log("선택된 날짜:", selectedDay);
  console.log("선택된 카테고리:", selectedCategory);
  console.log("필터링된 부스 수:", filtered.length);
  console.log("첫 번째 부스 데이터:", booths[0]);
  console.log("첫 번째 부스의 boothDays:", booths[0]?.boothDays);
  console.log("필터링된 부스들:", filtered);

  let y = "";

  useEffect(
    () => () => {
      localStorage.setItem("y", y);
    },
    []
  );

  document.addEventListener("scroll", () => {
    y = String(document.documentElement.scrollTop);
  });

  useEffect(() => {
    const newScrollY = Number(localStorage.getItem("y"));
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
