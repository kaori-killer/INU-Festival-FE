import { styled } from 'styled-components';

import BoothDay from '../../types/BoothDay';

type ExtraTimeProps = {
    boothDays: BoothDay[]
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    span {
        margin-left: 5px;
        margin-right: 5px;
        padding: 0px;
    }

    span:nth-child(2) {
        font-weight: bold;
    }
`;

export default function ExtraTime({ boothDays }: ExtraTimeProps) {
  return (
    <Container>
      {boothDays.map((boothDay) => (
        <div key={boothDay.id}>
          <span>{boothDay.day}</span>
          <span>{boothDay.time}</span>
        </div>
      ))}
    </Container>
  );
}
