/* React stuff */
import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Components */
import Badge from '../componets/atoms/Badge';
import CustomText from '../componets/atoms/CustomText';

/* Styles */
import styles from '../styles/global';

/* Images */
const BackButtonImage = require('../assets/images/back-arrow.png');

/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import CustomButton from '../componets/atoms/CustomButton';
import SwitchBadge from '../componets/atoms/SwitchBadge';
type SearchProductType = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

/* Styles and styled components */
const ImageViewContainer = styled.View`
  border-radius: 4px;
  flex: 1;
  height: 560px;
  border: 1px solid #8d63ff;
  margin: 8px 8px 16px 8px;
  background-color: #ffffff;
`;

const ProductDataContainer = styled.View`
  margin: 0 8px 0 8px;
`;

const ProductImage = styled.Image`
  border-radius: 4px;
  flex: 1;
  height: 540px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 14px;
  left: 14px;
  width: 28px;
  height: 28px;
`;

const ProductDetailStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default function SearchProducts({ navigation, route }: SearchProductType | any ) {
  return (
    <ScrollView style={styles.globalWrapper} >
      <ImageViewContainer>
        <ProductImage
          source={{ uri: route.params.image, cache: 'only-if-cached' }}
          resizeMode='center'
        />
        <BackButton onPress={() => navigation.navigate('SearchProduct')} >
          <Image source={BackButtonImage} style={{ width: 22, height: 18 }} />
        </BackButton>
        <Badge float text={`${route.params.rating.rate}  ❤️`} />
      </ImageViewContainer>

      <ProductDataContainer>
        <CustomText marginBottom={14} white fontSize={18} bold text={`${route.params.title}`} />

        <View style={{ ...ProductDetailStyles.rowContainer, justifyContent: 'flex-end', marginTop: 14 }} >
          <CustomText white fontSize={17} text={`${route.params.price}`} />
          <CustomText white fontSize={12} text={`  FRQTAL`} />
        </View>

        <View style={{ ...ProductDetailStyles.rowContainer, marginBottom: 14 }} >
          <CustomText white fontSize={16} text={`Author:  `} />
          <Badge text={`@${route.params.userName}`} />
        </View>

        <CustomText marginBottom={14} white fontSize={16} text={`${route.params.description}`} />

        <View style={{ ...ProductDetailStyles.rowContainer, marginBottom: 18 }} >
          <SwitchBadge text={`${route.params.category}`} />
        </View>

        <View style={{ ...ProductDetailStyles.rowContainer, marginBottom: 18, justifyContent: 'space-between' }} >
          <CustomButton borderRight={7} text='Eliminar' ></CustomButton>
          <CustomButton borderLeft={7} text='Editar' ></CustomButton>
        </View>
      </ProductDataContainer>
    </ScrollView>
  );
};
