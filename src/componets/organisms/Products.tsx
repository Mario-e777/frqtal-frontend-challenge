/* React stuff */
import React from 'react';

/* Modules */
import styled from 'styled-components/native';

/* Components */
import ProductCard from '../molecules/ProductCard';

/* Styled components */
const ProductCardContainer = styled.View``;

export default function Products() {
  return (
    <ProductCardContainer>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </ProductCardContainer>
  );
};

