import styled from "styled-components";

export const Container = styled.div`
   height: 60px; 
`;


export const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
export const Left = styled.div`
   flex: 1;
   display: flex;  
   align-items: center;  
`;
export const Logo = styled.h1`
   fonst-weight: bold;
   margin:0px 10px;
`
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
 `;
export const Input = styled.input`
  border: none;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
export const Center = styled.div`
   flex: 1;
   align-items: center; 

`;

export const Right = styled.div`
   flex: 1;
`;