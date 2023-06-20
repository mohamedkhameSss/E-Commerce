import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/cartRedux";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
const IconContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Container = styled.section`
  flex: 1;
  margin: 5px;
  min-width: 280px;

  position: relative;
  &:hover ${IconContainer} {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
`;
const ImageContainer = styled.div`
  padding: 40px;

  text-align: center;
`;
const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: pink;
  margin: auto;
`;
const Icon = styled.div`
  background-color: rgba(255, 255, 255, 0.622);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size:6px
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
  max-width: 200px;
`;
const Product = ({ productItem }) => {
  // const qauntity = useSelector((state) => state.cart.qauntity);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [product, setProduct] = useState({});
  const qauntity = 1;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${productItem._id}`);
        setProduct(res.data);
        setColor([res.data.color][0]);
        setSize([res.data.size][0]);
      } catch {}
    };
    getProduct();
  }, [productItem._id]);
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(addProduct({ ...product, qauntity }));
  };
  return (
    <Container>
      <ImageContainer>
        <Image src={productItem.img} />
        <IconContainer>
          <Icon>
            <FavoriteBorderIcon fontSize='12' />
          </Icon>
          <Icon>
            <Link to={`/products/${productItem._id}`}>
              <SearchIcon fontSize='12' />
            </Link>
          </Icon>
          <Icon onClick={handelClick}>
            <AddShoppingCartIcon fontSize='12' />
          </Icon>
        </IconContainer>
      </ImageContainer>
      <CircleContainer>
        <Circle></Circle>
      </CircleContainer>
    </Container>
  );
};

export default Product;
