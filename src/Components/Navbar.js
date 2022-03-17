import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Center, Container, Logo, Left, Right, Wrapper, SearchContainer, Input, Language, MenuItem } from './Styles/Styled.components';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Language>EN</Language>   
            <SearchContainer>
             <Input />
             <Search style = {{color: 'gray', fontSize: "16px"}}/>
            </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    E-commerce
                </Logo>
            </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>                
              </MenuItem>
            </Right>
        </Wrapper> 
    </Container>
  )
}

export default Navbar