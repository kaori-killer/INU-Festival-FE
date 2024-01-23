import { useState } from 'react';

import styled from 'styled-components';

import Header from './Header';

import LineUpItem from './LineupItem';

import BlurContainer from '../BlurContainer';
import useFetchPerforms from '../../hooks/useFetchPerforms';
import useCheckScreenWidth from '../../hooks/useCheckScreenWidth';

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;

  p {
    color: white;
    font-weight: bold;
    font-size: 2.2rem;
  }
`;

const MainBlurContainer = styled(BlurContainer)`
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 230px;
  position: absolute;
  top: 13rem;
  z-index: 100;
  cursor: pointer;
`;

export default function LineUp() {
  const [perview, setPerView] = useState(3);

  const performs = useFetchPerforms();

  const lineups = performs.filter((perform) => (
    perform.category === '연예인'
  ));

  useCheckScreenWidth(setPerView);

  return (
    <>
      <MainBlurContainer $backgroundimg="BOL2.jpeg">
        <Content>
          <Header />
          <p>오늘의 라인업</p>
        </Content>
      </MainBlurContainer>
      <BannerContainer>
        <LineUpItem
          perView={perview}
          spaceBetween={150}
          lineups={lineups}
        />
      </BannerContainer>
    </>
  );
}
