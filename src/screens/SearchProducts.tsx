/* React stuff */
import React from 'react';
import { View } from 'react-native';

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
  return (
    <View style={styles.globalWrapper} >
      <FilterProducts/>
      <View style={{ flex: 1, paddingTop: 16 }} >
        <Products navigation={navigation} />
      </View>
    </View>
  );
};

export { SearchProductType };
