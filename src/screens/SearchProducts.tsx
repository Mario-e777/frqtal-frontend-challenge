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
    padding: 0 8px 0 8px;
`;

export default function SearchProducts() {
  return (
    <SearchProductsContainer>
      <Text style={{ marginRight: 8, marginLeft: 8, marginTop: 16, backgroundColor: 'pink', borderRadius: 20, padding: 12, overflow: 'hidden' }} >Buscar producto</Text>
      <Text style={{ marginRight: 8, marginLeft: 8, marginBottom: 16, marginTop: 16, color: 'white', textAlign: 'right' }} >Filtrar por categoria   v</Text>
      <Products/>
    </SearchProductsContainer>
  );
};

