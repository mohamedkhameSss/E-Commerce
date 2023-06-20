import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Color,
  Currency,
  Price,
  ControlContainer,
  AmountNumber,
  Control,
} from "./Product";
import StripeCheckout from "react-stripe-checkout";
import { Link, redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import { userRequest } from "../requestMethods";

const KEY =
  "pk_test_51NADywHrsFi6tVE4nxRXJd1S0AdLexhcEhwz1px2y6oKh3BLZxturIMVZ7eNsza8q9qiJOWVv3guWwyFmr4Ito8b00iQUciqWr";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`;
const TopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  align-items: center;
`;
const MainRow = styled.div`
  display: flex;

  @media (max-width: 1020px) {
    flex-direction: column;
  }

  margin: 10px 0;
`;
const Button = styled.button`
  padding: 10px;
  border-size: 1px;
  border-color: #2fe4eb;
  margin: 5px;
  border-style: solid;
  border: ${(props) => props.filled && "none"};
  border-radius: 10px;
  background-color: ${(props) => (props.filled ? "black" : "transparent")};
  color: ${(props) => (props.filled ? " #2fe4eb" : "black")};
  cursor: pointer;
`;
const BagContainer = styled.div``;
const UnderLine = styled.span`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: underline;
`;
const Product = styled.div`
  display: flex;
  margin: 10px 0;
  @media (max-width: 630px) {
    flex-direction: column;
  }
`;
const ProductImg = styled.div`
  margin-right: 10px;

  flex: 1;
`;
const ProductProfile = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  @media (max-width: 1020px) {
    padding-right: 0px;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const ProductTitle = styled.div``;
const Image = styled.img`
  height: 150px;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
`;
const ProductId = styled.div``;
const ProductSize = styled.div``;
const ProductColor = styled.div``;
const ContainerControl = styled.div``;
const PriceCon = styled.div``;
const Products = styled.div`
  flex: 2;
`;
const Br = styled.hr`
  border: 1px solid #e4f7f7;
`;
const Summary = styled.div`
  border: 2px solid #e4f7f7;
  height: 50vh;
  border-radius: 10px;
  flex: 1;
  @media (max-width: 850px) {
    padding-bottom: 15px;
  }
  padding: 0 15px;
`;
const SummaryTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
`;
const SummaryElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SubTitle = styled.div`
  font-size: 20px;
`;
const PriceSum = styled.div`
  font-size: 25px;
  font-weight: 400;
`;

const ShoppingCart = () => {
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart);

  const total = useSelector((state) => state.cart.total);
  const [stripeToken, setStripeToken] = useState(null);
  redirect();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        redirect("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, redirect(), cart]);
  // const [totalsSum, setTotalsSum] = useState([]);
  // const totalSum = [0];
  // const sum = totalSum.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue
  // );
  // console.log(sum);
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <TopRow>
          <Button>
            <Link to={"/"}>Continue Shopping</Link>
          </Button>
          <BagContainer>
            <UnderLine>Shopping Bag(1)</UnderLine>
            <UnderLine>Your Wishlist(0)</UnderLine>
          </BagContainer>
          <Button filled>CheckOut Now</Button>
        </TopRow>
        <MainRow>
          <Products>
            {products.map((product) => (
              <>
                <Product key={product._id}>
                  <ProductImg>
                    <Image src={product.img} />
                  </ProductImg>
                  <ProductProfile>
                    <ProductInfo>
                      <ProductTitle>
                        <b>Product : </b>
                        {product.title}
                      </ProductTitle>
                      <ProductId>
                        <b>ID : </b>
                        {product._id}
                      </ProductId>
                      <Color color={product.color}></Color>
                      <ProductSize>
                        <b>Size : </b>
                        {product.size}
                      </ProductSize>
                    </ProductInfo>
                    <ContainerControl>
                      {/* <ControlContainer>
                        <Control key={314909}>-</Control>
                        <AmountNumber>{product.qauntity}</AmountNumber>
                        <Control key={31490934}>+</Control>
                      </ControlContainer> */}
                      <Price>
                        {product.price * product.qauntity}
                        <Currency>$</Currency>
                      </Price>
                    </ContainerControl>
                  </ProductProfile>
                </Product>
                <Br />
              </>
            ))}
          </Products>
          <Summary>
            {/* {console.log(...totalSum)} */}
            <SummaryTitle>ORDER SUMMERY</SummaryTitle>
            <SumContainer>
              <SummaryElement>
                <SubTitle>SubTotal</SubTitle>
                <PriceSum>
                  <Currency>$</Currency>
                </PriceSum>
              </SummaryElement>
              <SummaryElement>
                <SubTitle>Estimated Shipping</SubTitle>
                <PriceSum>
                  9<Currency>$</Currency>
                </PriceSum>
              </SummaryElement>
              <SummaryElement>
                <SubTitle>Shipping Discount</SubTitle>
                <PriceSum>
                  10<Currency>$</Currency>
                </PriceSum>
              </SummaryElement>

              <SummaryElement style={{ margin: 5, color: "red" }}>
                <SubTitle>
                  <b> Total</b>
                </SubTitle>

                <PriceSum>
                  {" "}
                  {total}
                  <Currency>$</Currency>
                </PriceSum>
              </SummaryElement>
              <StripeCheckout
                name='mohmed'
                image='https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                description={`Your total is $${cart.total}`}
                amount={500}
                currency='usd'
                token={onToken}
                stripeKey={`${KEY}`}
                paymentMethod='pm_card_visa'
              >
                {/* <Button>CHECKOUT NOW</Button> */}
              </StripeCheckout>
              {/* <Button filled>CHECKOUT NOW</Button> */}
            </SumContainer>
          </Summary>
        </MainRow>
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;
