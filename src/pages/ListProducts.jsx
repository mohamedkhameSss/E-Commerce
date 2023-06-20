import React, { useState } from "react";
import styled from "styled-components";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;
const FilterContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const FilterItems = styled.div`
  font-size: 25px;
  padding: 0 10px;
`;
const Select = styled.select`
  margin: 5px;
  padding: 10px;
`;
const Option = styled.option`
  font-size: 17px;
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  padding: 0 10px;
`;
const TitleFilter = styled.span`
  font-size: 25px;
`;

const ListProducts = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState();
  const handleChange = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <Container>
      <Container>
        <Title>{cat}</Title>
        <FilterContainer>
          <FilterItems>
            <TitleFilter> Filter Products:</TitleFilter>
            <Select name='color' onChange={handleChange}>
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name='size' onChange={handleChange}>
              <Option disabled>Size</Option>
              <Option>Xs</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </FilterItems>
          <FilterItems>
            <TitleFilter> Sort Products:</TitleFilter>
            <Select
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <Option value={"newest"}>Newest</Option>
              <Option value={"asc"}>Price (asc)</Option>
              <Option value={"asc"}>Price (dsc)</Option>
            </Select>
          </FilterItems>
        </FilterContainer>
      </Container>
      <Products cat={cat} filters={filters} sort={sort} />
    </Container>
  );
};

export default ListProducts;
