/* React stuff */
import React from 'react';
import { Text, View } from 'react-native';

/* Components */
import Products from '../componets/organisms/Products';

/* Styles */
import styles from '../styles/global';

/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
type SearchProductType = NativeStackScreenProps<RootStackParamList, 'SearchProduct'>;

export default function SearchProducts({ navigation }: SearchProductType) {
  return (
    <View style={styles.globalWrapper} >
      <Text style={{ marginRight: 8, marginLeft: 8, marginTop: 16, backgroundColor: 'pink', borderRadius: 20, paddingTop: 12, paddingBottom: 12, paddingLeft: 20, paddingRight: 20, overflow: 'hidden' }} >Buscar producto</Text>
      <Text style={{ marginRight: 8, marginLeft: 8, marginBottom: 16, marginTop: 16, color: 'white', textAlign: 'right' }} >Filtrar por categoria   v</Text>
      <Products navigation={navigation} />
    </View>
  );
};

export { SearchProductType };
