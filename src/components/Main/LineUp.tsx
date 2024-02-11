import { styled } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import Perform from '../../types/Perform';

const Container = styled.div`
height: 21rem;
position: relative;
margin-bottom: 20px;

img {
width: 220px;
height: 21rem;
border-radius: 0.9rem;
box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
}
`;

type LineUpProps = {
  perView: number;
  spaceBetween: number;
  lineups: Perform[];
  }

export default function LineUp({
  perView,
  spaceBetween,
  lineups,
}: LineUpProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={perView}
      speed={300}
      pagination={{ clickable: true }}
      allowTouchMove
    >
      {lineups.map((lineup, index) => {
        const key = `${index}-${lineup.id}`;
        return (
          <SwiperSlide key={key}>
            <Container data-hash={key}>
              <img src="BOL.jpeg" alt={lineup.img} />
            </Container>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
