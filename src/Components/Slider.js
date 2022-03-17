import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { SliderItems } from "../imageData";
import { useState } from "react";

const Container = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   position: relative;
   overflow: hidden;
`;
const Arrow = styled.div`
   height: 50px;
   width: 50px;
   background-color: white;
   border-radius: 50%;
   align-items: center;
   justify-content: center;
   display: flex;
   position: absolute;
   left: ${props => props.direction === "left" && "15px"};
   right: ${props => props.direction === "right" && "15px"};
   top: 0;
   bottom: 0;
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`;

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transform: translateX(${props => props.slideIndex * -100}vw);
   transition: all 1.5s ease;

`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;  
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;  
    padding: 50px;  
`;

const Title = styled.h1`
   font-size: 50px;
`;
const Desc = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`;
const Button = styled.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
`;


const Slider = () => {

 const [ slideIndex, setSlideIndex ] = useState(0); 

const handleClick = (direction) => {
  
  if(direction === "left") {
     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
  }else {
    setSlideIndex(slideIndex < 0 ? slideIndex + 1 : 0)
  }
}  
  return (
    <Container>
        <Arrow direction ="left" onClick={() => handleClick('left')}>
            <ArrowBackIosOutlined />
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
          {SliderItems.map((item) => (
          <Slide bg ={item.bg}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>Découvert</Button>
          </InfoContainer>            
          </Slide>
          ))}
          
        </Wrapper>
        <Arrow direction ="right" onClick={() => handleClick('left')}>
            <ArrowForwardIosOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider