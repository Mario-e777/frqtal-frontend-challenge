/* React stuff */
import React from 'react';
import { ScrollView } from 'react-native';

/* Styles */
import styles from '../styles/global';

/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import ProductDetailImage from '../componets/molecules/ProductDetailImage';
import ProductDetailData from '../componets/molecules/ProductDetailData';

type SearchProductType = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export default function SearchProducts({ navigation, route }: SearchProductType | any ) {
  return (
    <ScrollView style={styles.globalWrapper} >
      <ProductDetailImage navigation={navigation} route={route} />
      <ProductDetailData route={route} />
    </ScrollView>
  );
};
