import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import ItemCategories from "./ItemCategories";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <ItemCategories category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
