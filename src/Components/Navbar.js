import { Search } from '@material-ui/icons';
import React from 'react';
import { Center, Container, Logo, Left, Right, Wrapper, SearchContainer, Input, Language } from './Styles/Styled.components';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Language>EN</Language>   
            <SearchContainer>
             <Input />
             <Search/>
            </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    E-commerce
                </Logo>
            </Center>
            <Right>Right</Right>
        </Wrapper> 
    </Container>
  )
}

export default Navbar