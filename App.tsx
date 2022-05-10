/* React stuff */
import React from 'react';

/* Modules */
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import SearchProducts from './src/screens/SearchProducts';
import ProductDetail from './src/screens/ProductDetail';

/* Init vars */
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1E142C',
  },
};

/* Style components */
const AppContainer = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  height: 100%;
  background-color: #1E142C;
`;

export default function App() {
  return (
    <NavigationContainer theme={MyTheme} >
      <QueryClientProvider client={queryClient}>
        <ExpoStatusBar style='light' />
        <AppContainer>
          <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }} >
            <Stack.Screen name="Home" component={SearchProducts} />
            <Stack.Screen name="Details" component={ProductDetail} />
          </Stack.Navigator>
        </AppContainer>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
