/* React stuff */
import React from 'react';
import { Text, View } from 'react-native';

/* Components */
import Products from '../componets/organisms/Products';

/* Styles */
import styles from '../styles/global';

export default function SearchProducts() {
  return (
    <View style={styles.globalWrapper} >
      <Text style={{ marginRight: 8, marginLeft: 8, marginTop: 16, backgroundColor: 'pink', borderRadius: 20, padding: 12, overflow: 'hidden' }} >Buscar producto</Text>
      <Text style={{ marginRight: 8, marginLeft: 8, marginBottom: 16, marginTop: 16, color: 'white', textAlign: 'right' }} >Filtrar por categoria   v</Text>
      <Products/>
    </View>
  );
};

