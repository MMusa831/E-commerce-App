import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Products1, Products2, Products3 } from "../Products/Products";
import { ArrowBackOutlined } from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-weight: 600;
`;
const Container1 = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Icon = styled.div`
  margin: 20px;
`;

export const Electronics = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <Container1>
      <Icon>
        <ArrowBackOutlined onClick={goBack} />
      </Icon>
      <Products3 />
    </Container1>
  );
};
export const Clothes = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <Container>
      <Icon>
        <ArrowBackOutlined onClick={goBack} />
      </Icon>
      <Products1 />
    </Container>
  );
};
export const Accessories = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <Container>
      <Icon>
        <ArrowBackOutlined onClick={goBack} />
      </Icon>
      <Products2 />
    </Container>
  );
};

export const CategoryItem1 = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/clothes");
  };
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>Découvrir</Button>
      </Info>
    </Container>
  );
};
export const CategoryItem2 = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/accessories");
  };
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>Découvrir</Button>
      </Info>
    </Container>
  );
};

export const CategoryItem3 = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/electronics");
  };
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>Découvrir</Button>
      </Info>
    </Container>
  );
};
