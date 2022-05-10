/* React stuff */
import React, { useMemo } from 'react';
import { View } from 'react-native'

/* Modules */
import styled from 'styled-components/native';

/* Components */
import CustomText from '../atoms/CustomText';
import Badge from '../atoms/Badge';

/* Types */
import { SearchProductType } from '../../screens/SearchProducts';
type ProductDataI = {
  image: string,
  title: string,
  category: string,
  price: string,
  rating: { rate: string }
}

/* Styled components */
const ProductCardContainer = styled.TouchableOpacity`
  padding: 0 8px 16px 8px;  
`;

const ShadowProductCardContainer = styled.View`
  border-radius: 5px;
  border: 1px solid #8d63ff;
  width: 100%;
`;

const ImageContainer = styled.Image<{ randomBool: Boolean }>`
  border-radius: 4px;
  flex: 1;
  width: 100%;
  height: ${props => props.randomBool ? 220 : 300}px;
`;

const ImageDataContainer = styled.View`
  position: absolute;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: #8d63ffe9;
  overflow: hidden;
`;

export default function ProductCard({ productData, userName, navigation }: { productData: ProductDataI, userName: string, navigation: SearchProductType['navigation'] }) {
  /* Generating random bool to set image height */
  const rondomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <ProductCardContainer onPress={() => navigation.navigate('ProductDetails', { ...productData, userName: userName })} >
      <ShadowProductCardContainer>
        <ImageContainer
          randomBool={rondomBool}
          source={{ uri: productData.image, cache: 'only-if-cached' }}
          resizeMode="cover"
        />
        <Badge float text={`@${userName}`} />
        <ImageDataContainer>
          <CustomText bold white numOfLines={1} text={`${productData.title}`} />
          <CustomText white marginBottom={8} text={`${productData.category}`} />

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <CustomText white text={`${productData.price}`} />
              <CustomText fontSize={10} white text={'  FRQTAL'} />
            </View>
            <CustomText fontSize={12} white text={`${productData.rating.rate}  ❤️`} />
          </View>
        </ImageDataContainer>
      </ShadowProductCardContainer>
    </ProductCardContainer>
  );
};

export { ProductDataI };
