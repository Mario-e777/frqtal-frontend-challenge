/* React stuff */
import React from 'react';
import { Text, View } from 'react-native';

/* Modules */
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

/* Components */
import Products from '../componets/organisms/Products';

/* Styles */
import styles from '../styles/global';

/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import CustomText from '../componets/atoms/CustomText';
import Badge from '../componets/atoms/Badge';
type SearchProductType = NativeStackScreenProps<RootStackParamList, 'SearchProduct'>;

export default function SearchProducts({ navigation }: SearchProductType) {
  return (
    <View style={styles.globalWrapper} >

      <Text style={{ marginRight: 8, marginLeft: 8, marginTop: 16, backgroundColor: 'pink', borderRadius: 20, paddingTop: 12, paddingBottom: 12, paddingLeft: 20, paddingRight: 20, overflow: 'hidden' }} >Buscar producto</Text>
      <Collapse>
        <CollapseHeader>
          <View style={{ alignItems: 'flex-end', marginRight: 8, marginLeft: 8, marginTop: 16 }} >
            <CustomText fontSize={16} white text={'Filtrar por   V'} />
          </View>
        </CollapseHeader>

        <CollapseBody>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
            <Badge margin={7} category text={`electronics`} />
            <Badge margin={7} category text={`jewelery`} />
            <Badge margin={7} category text={`women's clothing`} />
            <Badge margin={7} category text={`men's clothing`} />
          </View>
        </CollapseBody>
      </Collapse>

      <View style={{ flex: 1, paddingTop: 16 }} >
        <Products navigation={navigation} />
      </View>
    </View>
  );
};

export { SearchProductType };
