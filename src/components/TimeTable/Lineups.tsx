import { styled } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';

import Lineup from './Lineup';

import Perform from '../../types/Perform';

import useCheckScreenWidth from '../../hooks/useCheckScreenWidth';

type LineupsProps = {
    lineups: Perform[];
}

const Section = styled.section`
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default function Lineups({ lineups }: LineupsProps) {
  const defaultPerview = 4;
  const [perview, setPerView] = useState(defaultPerview);

  useCheckScreenWidth(defaultPerview, setPerView);

  return (
    <Section>
      <h1>Lineup</h1>
      <Swiper
        spaceBetween={100}
        slidesPerView={perview}
        speed={300}
        pagination={{ clickable: true }}
        allowTouchMove
      >
        {lineups.map((lineup) => (
          <SwiperSlide key={lineup.id}>
            <Lineup
              lineup={lineup}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
