import { useState } from 'react';

import { styled } from 'styled-components';

import { useInterval } from 'usehooks-ts';
import Perform from '../../types/Perform';

const Section = styled.div`
    h1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Container = styled.div`
    display: flex;
`;

const Line = styled.div`
    border: dotted 3px #CEDCEA;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 25px;
`;

const Item = styled.div`
    background-color: #EBF2FF;
    margin-bottom: 24px;
    padding: 20px;
    border-radius: 12px;
    overflow: hidden;
    text-overflow: ellipsis;

    div {
      display: flex;
      justify-content: space-between;
    }
    span:nth-child(1) {
      font-size: 15px;
    }

    span:nth-child(2) {
      color: #F3BC5B;
      font-size: 12px;
    }

    #name {
        color: #000;
        font-weight: bold;
        font-size: 17px;
        letter-spacing: -0.68px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    #detail {
        color: #9EA9B5;
        font-size: 13px;
    }

    &.active {
      background-color: #0047C9;
      color: #FFFFFF;

      #name, #detail {
        color: #FFFFFF;
      }
    }
`;

type ScheduleProps = {
    performs: Perform[];
}

export default function Schedule({ performs }: ScheduleProps) {
  const [id, setId] = useState('-1');

  useInterval(() => {
    const match = (perform: Perform) => (
      perform.startTime <= '20:00'
      && perform.endTime >= '20:00'
    );
    const artist = performs.find(match);
    if (artist) {
      setId(artist.id);
    }
  }, 1000);

  return (
    <Section>
      <h1>전체 일정을 확인해보세요!</h1>
      <Container>
        <Line />
        <div>
          {performs.map((perform) => {
            const isActive = perform.id === id;

            return (
              <Item
                key={perform.id}
                className={isActive ? 'active' : ''}
              >
                <div>
                  <span>{perform.startTime}</span>
                  {isActive ? <span>진행 중!</span> : ''}
                </div>
                {' '}
                <h2 id="name">{perform.name}</h2>
                <p id="detail">{perform.detail}</p>
              </Item>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
