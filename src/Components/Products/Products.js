import styled from "styled-components";
import { AllProducts1, AllProducts2, AllProducts3 } from "../../data";
import { ProductItem1, ProductItem2, ProductItem3 } from "./ProductItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products1 = () => {
  return (
    <Container>
      {AllProducts1.map((item) => (
        <ProductItem1 item={item} />
      ))}
    </Container>
  );
};
export const Products2 = () => {
  return (
    <Container>
      {AllProducts2.map((item) => (
        <ProductItem2 item={item} />
      ))}
    </Container>
  );
};
export const Products3 = () => {
  return (
    <Container>
      {AllProducts3.map((item) => (
        <ProductItem3 item={item} />
      ))}
    </Container>
  );
};
