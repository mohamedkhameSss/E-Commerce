import React from "react";
import styled from "styled-components";
import { Button } from "./Product";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  @media (max-width: 630px) {
    width: 80%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #2fe4eb;
  padding: 5%;
  border-radius: 10px;
`;
const Title = styled.h2`
  color: white;
`;
const Input = styled.input`
  padding: 10px;
  margin: 5px;
`;

const Agreement = styled.div``;
const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>CREATE AN ACCOUNT</Title>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Email' type='email' />
          <Input placeholder='Phone Number' type='number' />
          <Input placeholder='Password' type='password' />
          <Input placeholder='Re-Password' type='password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link style={{ color: "white" }} to={"/login"}>
            Login
          </Link>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
