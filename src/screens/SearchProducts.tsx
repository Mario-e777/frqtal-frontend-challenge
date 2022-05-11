/* React stuff */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';

/* Components */
import Products from '../componets/organisms/Products';

/* Endpoints & utils */
import { getAllProducts, getAllCategories} from '../services/products';
import { getAllUsers } from '../services/users';

/* Styles */
import styles from '../styles/global';

/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import FilterProducts from '../componets/organisms/FilterProduct';
import { ProductDataI } from '../componets/molecules/ProductCard';

type SearchProductType = NativeStackScreenProps<RootStackParamList, 'SearchProduct'>;

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
    filterCategory: ''
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
    </View>
  );
};

export { SearchProductType };
