import styled from 'styled-components';
import Shouts from '../../types/Shouts';

const ContentBox = styled.div`
  flex-direction: column;
  color: #0042B9;
  font-family: SF Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px; /* 131.25% */
  letter-spacing: -0.48px;
  margin-left: 6px;


  span{
    color: #939393;
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 510;
    line-height: 100%; /* 12px */
    letter-spacing: -0.36px;
  }

  br {
    content: '';
  }
`;

const BallonBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;

  div{
    color: rgba(147, 147, 147, 1);
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 510;
    line-height: 21px; /* 175% */
    letter-spacing: -0.36px;
    margin-left: 12px;
    margin-right: 10px;
  }

  img{
    width: 34px;
    height: 30.16px;
    top: 496px;
    left: 44px;
    margin-left:16px;
  }
`;

const SentenceItemBox = styled.li`
  position: relative;
  overflow: hidden;
  animation: slideUp 12s linear infinite;

  div{
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @keyframes slideUp {
    0%, 10% {
      top: -5px;
    }
    20%, 30% {
      top: -82px;
    }
    40%, 50%{
      top: -159px;
    }
    60%, 70% {
      top: -236px;
    }
    80%, 99% {
      top: -313px;
    }
    100%{
      top: -5px;
    }
  }
`;

type SententenceItemProps = {
  sentence: Shouts;
}

export default function FestivalSentenceItem({ sentence }: SententenceItemProps) {
  return (
    <SentenceItemBox key={sentence.id}>
      <div>
        <BallonBox>
          <img src={sentence.emoji} alt="말풍선" />
        </BallonBox>
        <ContentBox>
          <span>{sentence.studentID}</span>
          <br />
          {sentence.content}
        </ContentBox>
      </div>
    </SentenceItemBox>
  );
}
