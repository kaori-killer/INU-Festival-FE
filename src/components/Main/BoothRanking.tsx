import styled from 'styled-components';

import BoothItem from './BoothItem';

import useFetchBoothsRanking from '../../hooks/useFetchBoothsRanking';

const BoothRankingTitle = styled.div`
  width: 100%;
  color: #000;
  font-family: SF Pro;
  font-size: 21px;
  font-style: normal;
  font-weight: 590;
  line-height: 30px; /* 142.857% */
  letter-spacing: -0.42px;
  margin-top:36px;
  margin-bottom:16px;
`;

const UpdateDate = styled.span`
  color: #A9A9A9;
  font-family: SF Pro;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 100% */
  letter-spacing: -0.45px;
`;

const BoothRankingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 492px;
  padding: 24px 22px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
  margin-top: 36px;
  margin-bottom: 36px;
`;

const BoothWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  height:100%;
`;
const BoothRankingCrown = styled.div`
  color: #0047C9;
  font-family: SF Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 590;
  line-height: normal;
  letter-spacing: -0.4px;
`;
const LineDiv = styled.div`   
  width: 100%;
  height: 1px;
  background-color: #CEDCEA;
  margin-bottom:20px;
  margin-top:12px;
`;

const BoothRank = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; 
  width:98%;
  height:100%;
  margin-bottom: 1.5rem; 
  min-height: 5rem;
`;

const BoothHeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 0.5rem;
  height: 100%; 
`;

const BoothHeart = styled.div`
  width: 6.8rem; /* Adjusted width using rem */
  height: 3rem; /* Adjusted height using rem */
  flex-shrink: 0;
  border-radius: 1.3125rem; /* Adjusted border-radius using rem */
  background: #EBF2FF;
  display: flex;
  align-items:center;
  gap:0.5rem;
  padding-left: 0.95rem;


  img {
    width:1.4rem; /* Adjusted width using rem */
    height: 3rem; /* Adjusted height using rem */
    flex-shrink: 0;
  }

  div {
    font-family: SF Pro;
    font-size:1.3rem; /* Adjusted font-size using rem */
    font-weight: 590;
    line-height: 1.1875rem; /* Adjusted line-height using rem */
    letter-spacing: 0.05em;
    text-align: left;
    color: rgba(0, 71, 201, 1);
    width: 1.1875rem; /* Adjusted width using rem */
  }
`;

export default function BoothRanking() {
  const booths = useFetchBoothsRanking();
  const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

  const fetchedBooths = [...booths];
  fetchedBooths.sort((a, b) => b.liked - a.liked);
  const sortedBooths = (fetchedBooths.slice(0, 5));

  const handleLikeClicked = (index: number) => {
    const updatedBooths = [...sortedBooths];
    updatedBooths[index].liked += 1;
    updatedBooths.sort((a, b) => b.liked - a.liked);
    // setSortedBooths(updatedBooths);
  };

  return (
    <>
      <BoothRankingTitle>
        축제에서 가장
        <br />
        인기있는 부스를 확인하세요
      </BoothRankingTitle>

      <UpdateDate>
        실시간 업데이트(2023.09.07)
      </UpdateDate>

      <BoothRankingContainer>
        <BoothWrapper>
          <BoothRankingCrown>부스 랭킹 👑</BoothRankingCrown>
          <LineDiv />
          {sortedBooths.map((booth, index) => (
            <BoothRank key={booth.id}>
              <BoothItem booth={booth} index={index} />
              <BoothHeartContainer>
                <BoothHeart onClick={() => handleLikeClicked(index)}>
                  <img src="Heart.svg" alt="" />
                  <div>{formatter.format(booth.liked)}</div>
                </BoothHeart>
              </BoothHeartContainer>
            </BoothRank>
          ))}
        </BoothWrapper>
      </BoothRankingContainer>
    </>
  );
}
