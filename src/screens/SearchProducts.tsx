/* React stuff */
import React, { useState }  from 'react';
import { View, Text } from 'react-native';

/* Components */
import Products from '../componets/organisms/Products';

/* Styles */
import styles from '../styles/global';

/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import FilterProducts from '../componets/organisms/FilterProduct';

type SearchProductType = NativeStackScreenProps<RootStackParamList, 'SearchProduct'>;

export default function SearchProducts({ navigation }: SearchProductType) {
  const [state, setState] = useState({
    filterText: '',
    filterCategory: ''
  });

  return (
    <View style={styles.globalWrapper} >
      <FilterProducts parentState={{ state, setState }} />
      <View style={{ flex: 1, paddingTop: 16 }} >
        <Products filterByText={state.filterText} navigation={navigation} />
      </View>
    </View>
  );
};

export { SearchProductType };
