import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';

import InfoWithIcon from '../MapDetail/InfoWithIcon';
import Booth from '../../types/Booth';

const Container = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 80%;
  margin-bottom: 100px;
`;

const PreButton = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const BoothContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #CEDCEA;

    img{
        width: 100px;
        height: 100px;
    }
`;

const BoothContent = styled.div`
    width: 35%;
    height: 100px;
    margin-left: 10px;
    margin-right: 10px;
    
    p {
        font-size: 17px;
        margin-top: 6px;
        margin-bottom: 6px;
        color: #0047C9;
        overflow: hidden;
    }
`;

const BoothInfoBottom = styled.div`
    color: #BBC7D3;
    font-size: 16px;

    div {
      display: inline-block;
      margin-top: 2.5px;
      margin-bottom: 2.5px;
      margin-right: 5px;
    }
`;

const LikedNumber = styled.div` 
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    background-color: #EBF2FF;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    color: #0047C9;
  
    span {
      font-size: 13px;
      margin: 1px;
    }
`;

type BoothListProps = {
  booths: Booth[];
  selectedDay: string;
};

export default function BoothList({
  booths,
  selectedDay,
}: BoothListProps) {
  if (!booths) { return []; }
  const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

  return (
    <Container>
      {booths.map((booth) => {
        console.log(booth);

        const {
          id, name, category, liked, boothImgs,
        } = booth;

        const boothDay = booth.boothDays.filter((
          booth,
        ) => booth.day === selectedDay);

        return (
          <PreButton
            to={`/map/${id}`}
            key={id}
          >
            <BoothContainer>
              <img src={boothImgs[0].url} alt="boothImg.png" />
              <BoothContent>
                <p>{name}</p>
                <BoothInfoBottom>
                  <div>{category}</div>
                  <LikedNumber>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 11" fill="none">
                      <path d="M11.4179 1.12468C10.0511 -0.136666 7.87118 -0.00321332 6.54828 1.29688C6.51752 1.32701 6.46478 1.32701 6.42962 1.29688C5.10233 -0.00321332 2.92241 -0.136666 1.55996 1.12468C0.197513 2.38602 0.122798 4.60737 1.48525 5.9419L5.44514 9.82064C6.02528 10.3889 6.96141 10.3889 7.54155 9.82064L11.3388 6.10118L11.497 5.9462C12.8595 4.61167 12.8331 2.43338 11.4223 1.12898L11.4179 1.12468Z" fill="#0047C9" />
                    </svg>
                    <span>{formatter.format(liked)}</span>
                  </LikedNumber>
                </BoothInfoBottom>
              </BoothContent>
              <InfoWithIcon
                small="true"
                booth={booth}
                boothDay={boothDay}
              />
            </BoothContainer>
          </PreButton>
        );
      })}
    </Container>
  );
}
