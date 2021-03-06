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
import CreateEditProduct from './src/screens/CreateEditProduct';

/* Types */
/* Defining root stack routes */
type RootStackParamList = {
  SearchProduct: undefined;
  ProductDetails: undefined;
  CreateEditProduct: undefined;
};

/* Init vars */
const queryClient = new QueryClient();
const RootStack = createNativeStackNavigator<RootStackParamList>();
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
          <RootStack.Navigator
            initialRouteName="SearchProduct"
            screenOptions={{
              headerShown: false,
            }}
          >
            <RootStack.Screen name="SearchProduct" component={SearchProducts} />
            <RootStack.Screen name="ProductDetails" component={ProductDetail} />
            <RootStack.Screen name="CreateEditProduct" component={CreateEditProduct} />
          </RootStack.Navigator>
        </AppContainer>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export { RootStackParamList };
