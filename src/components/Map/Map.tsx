import styled from 'styled-components';

import { useState } from 'react';
import MapLayer from './MapLayer';
import BottomSheet from './BannerContent';

import useFetchBooths from '../../hooks/useFetchBooths';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    cursor: grab;
`;

export default function Map() {
  const booths = useFetchBooths();

  const [selectedDay, setSelectedDay] = useState<string>('월');
  const [selectedCategory, setSelectedCategory] = useState<string>('주점');

  const filteredBooths = booths.filter((booth) => {
    const dayCount = booth.boothDays.filter((boothDay) => boothDay.day === selectedDay);
    return dayCount.length
    && booth.category === selectedCategory;
  });

  return (
    <Container>
      <MapLayer />
      <BottomSheet
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        booths={filteredBooths}
      />
    </Container>
  );
}
