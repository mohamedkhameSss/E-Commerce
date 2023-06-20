import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/cartRedux";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  object-fit: cover;
  display: flex;

  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  padding: 15px;
`;
const Image = styled.img`
  width: 100%;
`;
const ScriptProduct = styled.div`
  flex: 1;
  padding: 15px;
`;
const TitlePro = styled.h1`
  font-weight: 300;
  font-size: 50px;
`;
const Desc = styled.div``;
export const Price = styled.div`
  font-size: 50px;
  font-weight: 300;

  margin: 5% auto;
`;
export const Currency = styled.span``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  align-items: center;
  margin: auto;
`;
const ColorFilter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0 5px;
`;
const Title = styled.div`
  font-size: 20px;
`;
const SizeFilter = styled.select`
  margin: 0 5px;
  padding: 10px;
`;
const Option = styled.option``;
export const ControlContainer = styled.div`
  flex: 1;
  display: flex;
  font-size: 30px;
  font-weight: 400;
`;
export const Button = styled.button`
  flex: 1;
  cursor: pointer;
  padding: 10px 10px;
  background-color: pink;
  border-radius: 5%;
  border: 2px pink solid;
  color: white;
  margin-top: 5%;
  font-size: 20px;
`;
export const Control = styled.div`
  cursor: pointer;
`;
export const AmountNumber = styled.div`
  margin: 0 10px;
  border: 1px solid pink;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [qauntity, setQauntity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  const handelQauntity = (type) => {
    if (type === "dec") {
      qauntity > 1 && setQauntity(qauntity - 1);
    } else {
      setQauntity(qauntity + 1);
    }
  };
  const handelClick = () => {
    dispatch(addProduct({ ...product, qauntity, color, size }));
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <ScriptProduct>
            <TitlePro>{product.title}</TitlePro>
            <Desc>{product.desc}</Desc>
            <Price>
              <Currency>$ </Currency>
              {product.price}
            </Price>
            <FilterContainer>
              <ColorFilter>
                <Title> Color:</Title>

                {product.color &&
                  product.color.map((col, index) => (
                    <Color
                      onClick={() => setColor(col)}
                      key={index}
                      color={col}
                    ></Color>
                  ))}
              </ColorFilter>
              <Title>Size </Title>
              <SizeFilter
                onClick={(e) => {
                  setSize(e.target.value);
                }}
              >
                <Option key={4} defaultValue>
                  Xs
                </Option>
                <Option key={5}>Xs</Option>
                <Option key={6}>S</Option>
                <Option key={7}>M</Option>
                <Option key={8}>L</Option>
                <Option key={9}>XL</Option>
              </SizeFilter>
            </FilterContainer>
            <FilterContainer>
              <ControlContainer>
                <Control
                  onClick={() => {
                    handelQauntity("dec");
                  }}
                >
                  -
                </Control>
                <AmountNumber>{qauntity}</AmountNumber>
                <Control
                  onClick={() => {
                    handelQauntity("inc");
                  }}
                >
                  +
                </Control>
              </ControlContainer>
              <Button onClick={handelClick}>ADD TO CART</Button>
            </FilterContainer>
          </ScriptProduct>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Product;
