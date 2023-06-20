import React from "react";
import styled from "styled-components";
import { tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 230px;
`;
const ImgContainer = styled.div`
  flex: 1;
  margin: 5px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 80%;
`;
const ImageScript = styled.div`
  background-color: rgba(128, 128, 128, 0.4);

  position: absolute;
  width: 100%;
  height: 80%;
  top: 0;
  color: white;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 10px 10px;
  background-color: transparent;
  border-radius: 5%;
  border: 2px pink solid;
  color: white;
  margin-top: 10px;
  font-size: 20px;
`;
const ImgTitle = styled.div`
  font-size: 40px;
  ${tablet({ fontSize: 30 })}
`;

const ItemCategories = ({ category }) => {
  return (
    <Container>
      <ImgContainer>
        <Link to={`/listproducts/${category.cat}`}>
          <Image src={category.img} />
          <ImageScript>
            <ImgTitle>{category.title}</ImgTitle>
            <Button>Category</Button>
          </ImageScript>
        </Link>
      </ImgContainer>
    </Container>
  );
};

export default ItemCategories;
