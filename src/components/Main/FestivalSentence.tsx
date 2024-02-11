import styled from 'styled-components';

import FestivalSentenceItem from './FestivalSentenceItem';
import useFetchSentence from '../../hooks/useFetchSentence';
import Word from './Word';

const FestivalSentenceBox = styled.div`
`;

const SentenceBox = styled.ul`
  margin-top: 6rem;
  background-color: #F8F8FA;
  width: 100%;
  height: 61px;
  border-radius: 12px;
  align-items: center;
  overflow: hidden;
`;

export default function FestivalSentence() {
  const sentences = useFetchSentence();

  return (
    <>
      <FestivalSentenceBox>
        <SentenceBox>
          {sentences.map((sentence) => (
            <FestivalSentenceItem
              key={sentence.id}
              sentence={sentence}
            />
          ))}
        </SentenceBox>
      </FestivalSentenceBox>
      <Word />
    </>
  );
}
