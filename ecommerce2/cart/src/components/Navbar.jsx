import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/userRedux'; // Assume you have a logout action

// Styled Components
const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2,
  })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const SearchContainer = styled.span`
  border: 0.5px solid lightgray;
  align-items: center;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
    marginLeft: "5px",
  })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
  color: #333;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4caf50; /* Change color on hover */
  }

  ${mobile({
    fontSize: "12px", 
    marginLeft: "10px",
  })}
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline from Link */
  color: inherit; /* Inherit color from parent element */
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector(state => state.user.currentUser); // Assuming user data is stored here
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle sign-out functionality
  const handleSignOut = () => {
    dispatch(logout()); // This will clear the user state (implement the logout action)
    navigate('/login'); // Redirect to login page after sign-out
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input placeholder='search' />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CLICKART</Logo>
        </Center>
        <Right>
          {!user ? (
            // If there's no user, show "Sign in" and "Register"
            <>
              <StyledLink to="/register">
                <MenuItem>Register</MenuItem>
              </StyledLink>
              <StyledLink to="/login">
                <MenuItem>Sign in</MenuItem>
              </StyledLink>
            </>
          ) : (
            // If the user is logged in, show "Sign out"
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
          )}
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

