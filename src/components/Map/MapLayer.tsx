import { useEffect } from 'react';

import { styled } from 'styled-components';

import Kakao from '../../utils/CreateKakaoMap';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    position: absolute;
    height: 100em;
`;

export default function MapLayer() {
  useEffect(() => {
    Kakao();
  }, []);

  return (
    <Container id="map" />
  );
}
