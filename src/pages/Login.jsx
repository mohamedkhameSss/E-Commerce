import React from "react";
import styled from "styled-components";
import { Button } from "./Product";
import Navbar from "../components/Navbar";
import { Link, redirect } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.pexels.com/photos/3646108/pexels-photo-3646108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  margin: auto;
  @media (max-width: 730px) {
    width: 80%;
  }
  @media (max-width: 730px) {
    width: 80%;
  }
`;
const Form = styled.form`
  background-color: #2fe4eb;
  padding: 5%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  color: white;
`;
const Input = styled.input`
  padding: 10px;
  margin: 5px;
`;

const Linka = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;
const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Form>
            <Title>Sign In</Title>
            <Input placeholder='Email' type='email' />
            <Input placeholder='Password' type='password' />
            <Linka>Have You Forget Password</Linka>
            <Linka>
              <Link to={"/signup"}>Create A New Account </Link>
            </Linka>

            <Button>Register</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
