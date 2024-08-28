import { styled } from 'styled-components';

import BoothList from './BoothList';

import Booth from '../../types/Booth';

import useFetchCategories from '../../hooks/useFetchCategories';

import dragBottomSheet from '../../utils/dragBottomSheet';

const Wrapper = styled.div`
  transition: height 0.3s ease;

  position: absolute ;
  z-index: 300;
  border-radius: 3%;

  touch-action: none;
  transition: transform 150ms ease-out;    
  max-width: 600px;
  width: 100%;
  box-shadow: 0px 2px 15px 5px rgba(1, 60, 169, 0.15);
  bottom: 0;
  height: 55%;
  max-height: 90%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;

`;

const BottomSheetContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 85%;
  position: relative;
  padding-bottom: 50px;
`;

const BottomSheetHandler = styled.div`
    z-index: 100;
    position: absolute;
    height: 100%;
  
    width: 100%;
  display: flex;
  justify-content: center;
`;

const BottomSheetHeader = styled.div`
    border: 0px;
    background-color: #BBC7D3;
    border-radius: 12px;
    width: 60px;
    height: 6.747px;
    margin: 5px 0;
`;

const BottomSheetFilter = styled.div`
    width: 100%;
    margin-top: 5px;
    padding: 10px 0;
    border-bottom: 1px dashed #CEDCEA;

    p{
      color: #969FA9;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.52px;
      padding-right: 10px;
      width: 45px;
    }

    button {
      color: #000;
      height: 43px;
      border: 0px;
      border-radius: 999px;
      font-size: 13px;
      font-style: normal;
      font-weight: 800;
      line-height: 21px;
      letter-spacing: -0.52px;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      height: 45px;
      cursor: pointer;
      background-color: #F3F3F5;
      font-family: SUIT, sans-serif;
    }
    
    .clickedDay {
      background-color: #EBF2FF;
    }

    .clickedCategory {
      background-color: #EBF2FF;
    }

`;

const DayFilterContainer = styled.div`
  display: flex;

  button {
    padding: 0 24px;
  }

`;

const CategoryFilterContainer = styled.div`
  display: flex;

  button {
    padding: 0 30px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

const DataFilterContainer = styled.div`
    width: 100%;
    overflow: scroll;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

type BottomSheetProps = {
  setSelectedDay: (value: string) => void;
  selectedDay: string;
  setSelectedCategory: (value: string) => void;
  selectedCategory: string;
  booths: Booth[];
  setShowMarker: (value: string) => void;
}

export default function BottomSheet({
  setSelectedDay,
  selectedDay,
  setSelectedCategory,
  selectedCategory,
  booths,
  setShowMarker,
}: BottomSheetProps) {
  dragBottomSheet();

  const categories = useFetchCategories();
  const { days, filters } = categories;

  const handleSetFilterDay = (category: string) => {
    localStorage.setItem('day', category);
    setSelectedDay(category);
  };

  const handleSetFilterCategory = (category: string) => {
    localStorage.setItem('category', category);
    setSelectedCategory(category);
  };

  return (
    <Wrapper className="bottom-sheet">
      <BottomSheetHandler className="handle">
        <BottomSheetHeader />
      </BottomSheetHandler>
      <BottomSheetContent className="content">
        <BottomSheetFilter>
          <Container>
            <p>요일</p>
            <DataFilterContainer>
              <FilterContainer>
                {days && days.map((category: string) => (
                  <DayFilterContainer key={category}>
                    <button
                      type="button"
                      onClick={() => handleSetFilterDay(category)}
                      className={selectedDay === category ? 'clickedDay' : ''}
                    >
                      {category}
                    </button>
                  </DayFilterContainer>
                ))}
              </FilterContainer>
            </DataFilterContainer>
          </Container>
          <Container>
            <p>분류</p>
            <DataFilterContainer>
              <FilterContainer>
                {filters && filters.map((category: string) => (
                  <CategoryFilterContainer key={category}>
                    <button
                      type="button"
                      onClick={() => handleSetFilterCategory(category)}
                      className={selectedCategory === category ? 'clickedCategory' : ''}
                    >
                      {category}
                    </button>
                  </CategoryFilterContainer>
                ))}
              </FilterContainer>
            </DataFilterContainer>
          </Container>
        </BottomSheetFilter>
        <BoothList
          booths={booths}
          selectedDay={selectedDay}
          setShowMarker={setShowMarker}
        />
      </BottomSheetContent>
    </Wrapper>
  );
}
