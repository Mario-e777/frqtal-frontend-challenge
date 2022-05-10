/* React stuff */
import React, { useMemo } from 'react';
import { Text, View } from 'react-native'

/* Modules */
import styled from 'styled-components/native';

/* Components */
import CustomText from '../atoms/customText';

/* Styled components */
const ProductCardContainer = styled.View`
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

/* todo: convert to atom */
const LikeButton = styled.Text`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export default function ProductCard({ productData }) {
  /* Generating random bool to set image height */
  const rondomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <ProductCardContainer>
      <ShadowProductCardContainer>
        <ImageContainer
          randomBool={rondomBool}
          source={{ uri: productData.image }}
          resizeMode="cover"
        />
        <LikeButton>❤️</LikeButton>
        <ImageDataContainer>
          <CustomText bold white numOfLines={1} text={`${productData.title}`} />
          <CustomText white marginBottom={8} text={`${productData.category}`} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }} >
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

