import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #a8d5ba, #b2e5d4); /* Light green gradient */
  ${mobile({ flexDirection: "column", padding: "20px" })}
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  width: 350px; /* Fixed width for consistency */
  ${mobile({ width: "100%", padding: "20px" })}
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #388e3c; /* Dark green for title */
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #c8e6c9; /* Light green border */
  border-radius: 6px;
  font-size: 16px;
  color: #388e3c;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #66bb6a; /* Darker green border on focus */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #66bb6a; /* Light green button */
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c; /* Darker green on hover */
  }

  &:disabled {
    background-color: #c8e6c9;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: #f44336; /* Red for error */
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;

const StyledLink = styled(Link)` /* Styled Link from react-router-dom */
  text-decoration: none;
  font-size: 14px;
  color: #66bb6a;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #388e3c;
  }
`;

const SiteTitle = styled.h1`
  position: absolute;
  top: 10%;
  font-size: 60px;
  color: #388e3c;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  ${mobile({
    fontSize: "40px",
    top: "5%",
  })}
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <SiteTitle>CLICKART</SiteTitle> {/* Highlighted Site Title */}
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <StyledLink to="/register">Create a new account</StyledLink> {/* Updated Link */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;


