/* React stuff */
import React from 'react';

/* Modules */
import Constants from 'expo-constants';
import styled from 'styled-components/native';

/* Screens */
import SearchProducts from './src/screens/SearchProducts';

/* Styled components */
const AppContainer = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  height: 100%;
  background-color: #1E142C;
`;

export default function App() {
  return (
    <AppContainer>
      <SearchProducts />
    </AppContainer>
  );
};
