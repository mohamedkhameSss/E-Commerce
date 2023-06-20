import React from "react";
import styled from "styled-components";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #f5fafd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: bold;
`;
const Desc = styled.div`
  margin: 10px 0;
  font-weight: 400;
  font-size: 18px;
`;
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  border: 1px solid black;
`;
const Input = styled.input`
  flex: 8;
  padding: 10px 5px;
  border: none;
`;
const Button = styled.button`
  background-color: teal;
  border: none;
  cursor: pointer;
  flex: 1;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get Timely Updates From Your Favourite Products</Desc>
      <InputContainer>
        <Input placeholder='Your Email' type='email' />
        <Button>
          <DoubleArrowIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
