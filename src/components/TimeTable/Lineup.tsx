import { styled } from 'styled-components';

import Perform from '../../types/Perform';

const Container = styled.div`
width: 159px;
height: 21rem;
margin-bottom: 20px;
cursor: pointer;

img {
  width: 159px;
  height: 154px;
  border-radius: 1.2rem;
  box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
}

div {
  margin-top: 5px;
  margin-top: 5px;
}
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const Description = styled.p`
  display: flex;
  font-size: 13px;
  margin-top: 5px;
`;

type LineupProps = {
  lineup: Perform;
}

export default function Lineup({ lineup }: LineupProps) {
  const {
    name, startTime, endTime,
  } = lineup;

  return (
    <Container>
      <img src="BOL.jpeg" alt="" />
      <div>
        <Title>{name}</Title>
        <Description>
          {startTime}
          {' '}
          ~
          {' '}
          {endTime}
        </Description>
      </div>

    </Container>
  );
}
