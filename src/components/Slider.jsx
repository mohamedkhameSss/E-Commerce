import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  ${mobile({ display: "none" })}
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: pink;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 5%" : "right:5%")};
  cursor: pointer;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;

  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;
const WordSlide = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.div`
  font-size: 30px;
  margin: 10px 0px;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 10px 10px;
  background-color: transparent;
  border-radius: 5%;
  border: 1px pink solid;
  color: gray;
  margin-top: 10px;
  font-size: 20px;
  width: 25%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction='left'>
        <ArrowBackIosIcon onClick={() => handleClick("left")} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <ImgContainer>
              <Img src={items.img} />
            </ImgContainer>
            <WordSlide>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>Book Now</Button>
            </WordSlide>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right'>
        <ArrowForwardIosIcon onClick={() => handleClick("right")} />
      </Arrow>
    </Container>
  );
};

export default Slider;
