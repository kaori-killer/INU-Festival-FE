import styled, { css } from 'styled-components';
import Booth from '../../types/Booth';

const MapInfoMiddle = styled.div<{$small: string }>`
  padding-left: 0;
  padding-top: 10px;
  width: max-content;
  div{
    display: flex;
    align-items: center;
    letter-spacing: -0.04348rem;
  }

  p{
    color: black;
  }

  span{
    width: 17px;
    height: 20px;
  }

  img{
    width: 100%;
    height: 100%;
  }

  ${(props) => (props.$small === 'false') && css`
    div{
      padding: 1rem;
    }
    span{
      width: 18px;
      margin: 0 1.5rem;
    }
    p{
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.3px;
    }
  `}

  ${(props) => (props.$small === 'true') && css`
    font-size: 12px;
    
    span {
      width: 15px;
      margin-right: 1.2rem;
    }

    p{
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.26px;
    }
  `}
`;

type InfoWithIconProps = {
  small: 'true' | 'false';
  booth: Booth;
  selectedDay: string;
}

export default function InfoWithIcon({
  small,
  booth,
  selectedDay,
}: InfoWithIconProps) {
  if (!booth || !selectedDay || !booth.boothDays) { return null; }

  const {
    department, location, time, boothDays,
  } = booth;
  const days = boothDays.map((dayInfo) => dayInfo.day).join(', ');

  return (
    <MapInfoMiddle $small={small}>
      <div>
        <span>
          <img src="/light.svg" alt="light" />
        </span>
        <p>{department}</p>
      </div>
      <div>
        <span>
          <img src="/marker.svg" alt="marker" />
        </span>
        <p>{location}</p>
      </div>
      <div>
        <span>
          <img src="/clock.svg" alt="clock" />
        </span>
        <p>
          {`(${days}) ${time} `}
        </p>
      </div>
    </MapInfoMiddle>
  );
}
