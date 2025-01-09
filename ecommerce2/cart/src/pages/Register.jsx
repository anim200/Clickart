import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #a8d5ba, #d0f7e8); /* Light greenish gradient */
`;

const FormContainer = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2e7d32; /* Dark green */
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 14px;
  color: #388e3c; /* Medium green */
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #c8e6c9; /* Light green border */
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #81c784; /* Light green when focused */
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #66bb6a; /* Green button */
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4caf50; /* Darker green when hovered */
  }

  @media screen and (max-width: 600px) {
    padding: 12px;
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #66bb6a; /* Green color for loader */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoginLink = styled.div`
  margin-top: 20px;
`;

const StyledLink = styled(Link)` /* Styled Link from react-router-dom */
  color: #388e3c; /* Medium green */
  text-decoration: none;

  &:hover {
    color: #66bb6a; /* Light green on hover */
    text-decoration: underline;
  }
`;

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false); // Track loading state
  const [successMessage, setSuccessMessage] = useState("");
  
  const navigate = useNavigate(); // Hook to navigate to login page

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return; // Prevent form submission
    }

    // Clear previous error message
    setErrorMessage("");
    setLoading(true); // Show the loader

    try {
      const response = await axios.post('https://clickart-backend.vercel.app/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json', // JSON content
        },
      });

      // Handle successful response
      setSuccessMessage("You have been successfully registered!");
      setLoading(false); // Hide the loader
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after 2 seconds
      }, 2000);
    } catch (error) {
      setLoading(false); // Hide the loader
      console.error('Error submitting form:', error);
      setErrorMessage('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Heading>Sign Up at Clickart</Heading>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </InputGroup>
          
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          <Button type="submit">
            {loading ? <Loader /> : 'Register'} {/* Show loader or button text */}
          </Button>

          <LoginLink>
            <p>
              Already have an account? <StyledLink to="/login">Login</StyledLink> {/* Updated Link */}
            </p>
          </LoginLink>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Register;


