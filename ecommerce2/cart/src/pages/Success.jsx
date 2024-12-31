import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8f0;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #2e8b57;
`;

const SuccessMessage = styled.h1`
  font-size: 2.5rem;
  color: #2e8b57;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #4caf50;
  margin-bottom: 40px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`;

const Success = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Container>
      <div>
        <SuccessMessage>Payment Successful!</SuccessMessage>
        <Description>Your payment was processed successfully. Thank you for your purchase!</Description>
        <Button onClick={() => window.location.href = "/"}>Go to Home</Button>
      </div>
    </Container>
  );
};

export default Success;
