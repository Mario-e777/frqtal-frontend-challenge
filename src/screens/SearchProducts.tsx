/* React stuff */
import React from 'react';
import { Text } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Components */
import Products from '../componets/organisms/Products';

/* Styled components */
const SearchProductsContainer = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
`;

export default function SearchProducts() {
  return (
    <SearchProductsContainer>
      <Text style={{ marginTop: 16, backgroundColor: 'pink', borderRadius: 100, padding: 12 }} >Buscar producto</Text>
      <Text style={{ marginBottom: 16, marginTop: 16, color: 'white', textAlign: 'right' }} >Filtrar por categoria   v</Text>
      <Products/>
    </SearchProductsContainer>
  );
};

