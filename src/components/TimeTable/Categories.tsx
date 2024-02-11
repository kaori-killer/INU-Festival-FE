import { styled } from 'styled-components';
import Category from './Category';

const Content = styled.header`
  position: relative;
  z-index: 1;
  color: #FFFFFF;

  h1, ul, p {
    padding-block: 1rem;
  }
  h1 {
    height: 40px;
    text-align: center;
    font-weight: 510;
    line-height: 21px;
    margin-top: 1rem;
    
  }
  ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  p {
      font-weight: 510;
      line-height: 21px;
      text-align: center;
  }
`;

type CategoriesProps = {
    categories: string[];
    filterCategory: string;
    setFilterCatergory: (category: string) => void;
  }

export default function Categories({
  categories,
  filterCategory,
  setFilterCatergory,
}: CategoriesProps) {
  const handleSetFilterCategory = (category: string) => {
    setFilterCatergory(category);
  };

  return (
    <Content>
      <h1>타임테이블</h1>
      <ul>
        {categories.map((category: string) => (
          <Category
            key={category}
            active={category === filterCategory}
            category={category}
            handleSetFilterCategory={handleSetFilterCategory}
          />
        ))}
      </ul>
    </Content>
  );
}
