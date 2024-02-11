import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import useFetchKeyword from '../../hooks/useFetchWords';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const WordContainer = styled.div`
    display:flex;
    margin-top:12px;
`;

const WordContent = styled.div`
    width: 64px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 33px;
    background: #F7F7F7;
    text-align:center;
    color: #4F4F4F;
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.24px;
    margin-right:8px;
`;

export default function Word() {
  const wordList = useFetchKeyword();

  return (
    <WordContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        allowTouchMove
        freeMode
        freeModeMinimumVelocity={0.01}
      >
        {wordList.map((word) => (
          <SwiperSlide key={word.id}>
            <WordContent>{word.word}</WordContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </WordContainer>
  );
}
