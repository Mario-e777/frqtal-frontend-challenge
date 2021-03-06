/* React stuff */
import React from 'react';
import { ScrollView } from 'react-native';

/* Styles */
import styles from '../styles/global';

/* Types */
import { RootStackParamList } from '../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductDetailImage from '../components/molecules/ProductDetailImage';
import ProductDetailData from '../components/molecules/ProductDetailData';

type SearchProductType = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export default function SearchProducts({ navigation, route }: SearchProductType) {
  return (
    <ScrollView style={styles.globalWrapper} >
      <ProductDetailImage navigation={navigation} route={route} />
      <ProductDetailData navigation={navigation} route={route} />
    </ScrollView>
  );
};
