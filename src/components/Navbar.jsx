import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 0px 5%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;

  algin-items: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  align-items: center;
  display: flex;
  ${mobile({ display: "none" })}
  flex: 1;
`;
const Languages = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  padding: 5px 10px;
  display: flex;
`;
const Input = styled.input`
  border: none;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-right: 10px;
  padding-left: 10px;
`;
const LogoCon = styled.div``;
const Logo = styled.h1``;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.qauntity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <LogoCon>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Logo>MESO</Logo>
            </Link>
          </LogoCon>
        </Center>
        <Right>
          <Link style={{ textDecoration: "none" }} to={"/signup"}>
            <MenuItem key={795995959}>REGISTER</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            <MenuItem key={79599595944}>LOGIN</MenuItem>
          </Link>
          <Link to={"/card"}>
            <Badge badgeContent={`${quantity}`} color='primary'>
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
