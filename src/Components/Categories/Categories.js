import styled from "styled-components";
import { category1, category2, category3 } from "../../data";
import { CategoryItem1, CategoryItem2, CategoryItem3 } from "./CategoryItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {category1.map((item) => (
        <CategoryItem1 item={item} key={item.id} />
      ))}
      ,
      {category2.map((item) => (
        <CategoryItem2 item={item} key={item.id} />
      ))}
      ,
      {category3.map((item) => (
        <CategoryItem3 item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
