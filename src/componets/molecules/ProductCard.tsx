/* React stuff */
import React from 'react';
import { Text } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Styled components */
const ProductCardContainer = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: red;
    padding: 12px;
    border: 1px solid black;
`;

export default function ProductCard() {
  return (
    <ProductCardContainer>
      <Text>Image</Text>
      <Text>Details</Text>
    </ProductCardContainer>
  );
};

