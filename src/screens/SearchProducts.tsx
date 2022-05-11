/* React stuff */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

/* Components */
import { useQuery } from 'react-query';
import Products from '../componets/organisms/Products';

/* Endpoints & utils */
import { getAllProducts, getAllCategories } from '../services/products';
import { getAllUsers } from '../services/users';

/* Styles */
import styles from '../styles/global';

/* Types */
import { RootStackParamList } from '../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import FilterProducts from '../componets/organisms/FilterProduct';
import { ProductDataI } from '../componets/molecules/ProductCard';
import styled from 'styled-components/native';
import CustomText from '../componets/atoms/CustomText';

type SearchProductType = NativeStackScreenProps<RootStackParamList, 'SearchProduct'>;

/* Styled components */
const FloatingMenu = styled.TouchableOpacity`
  background-color: #de0165c9;
  border: 1px solid #de0164;
  height: 48px;
  width: 48px;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FloatingMenuContainer = styled.View`
  width: 100%;
`;

export default function SearchProducts({ navigation }: SearchProductType) {
  /* Data fetch hooks */
  const ProductsMutation = useQuery('get-all-products', getAllProducts);
  const CategoriesMutation = useQuery('get-all-Categories', getAllCategories);
  const UsersMutation = useQuery('get-all-users', getAllUsers);

  /* States */
  const [productsToShow, setProductsToShow] = useState<Array<ProductDataI>>([]);
  const [allUsers, setAllUsers] = useState<Array<{ username: string }>>([]);
  const [categories, setCategories] = useState<Array<string>>([]);
  const [state, setState] = useState({
    filterText: '',
    filterCategory: '',
  });

  /* Effects */
  useEffect(() => { /* Getting all products data *///@ts-ignore
    ProductsMutation.data && setProductsToShow(() => ProductsMutation.data)
  }, [ProductsMutation.data]);

  useEffect(() => { /* Getting all categories data *///@ts-ignore
    CategoriesMutation.data && setCategories(() => CategoriesMutation.data)
  }, [CategoriesMutation.data]);

  useEffect(() => { /* Getting all users data *///@ts-ignore
    UsersMutation.data && setAllUsers(() => UsersMutation.data)
  }, [UsersMutation.data]);

  return (
    <View style={styles.globalWrapper} >
      <CustomText marginLeft={8} marginTop={8} fontSize={16} white text={'Buscar producto'} />
      <FilterProducts categories={categories} parentState={{ state, setState }} />
      <View style={{ flex: 1, paddingTop: 16 }} >
        <Products
          allUsers={allUsers}
          ProductsMutation={ProductsMutation}
          productsToShow={productsToShow}
          filterByCategory={state.filterCategory}
          filterByText={state.filterText}
          navigation={navigation}
        />
      </View>
      <FloatingMenuContainer style={{ paddingBottom: 16, position: 'absolute', bottom: 0, right: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} >
        <FloatingMenu onPress={() => navigation.navigate('CreateEditProduct', { fromScreen: 'SearchProduct' })} >
          <Text style={{ fontSize: 20, color: 'white' }} >+</Text>
        </FloatingMenu>
      </FloatingMenuContainer>
    </View>
  );
};

export { SearchProductType };
