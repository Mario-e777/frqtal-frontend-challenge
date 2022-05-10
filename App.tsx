/* React stuff */
import React from 'react';

/* Modules */
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';

/* Screens */
import SearchProducts from './src/screens/SearchProducts';

/* Init vars */
const queryClient = new QueryClient();

/* Styled components */
const AppContainer = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  height: 100%;
  background-color: #1E142C;
`;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <SearchProducts/>
      </AppContainer>
    </QueryClientProvider>
  );
};
