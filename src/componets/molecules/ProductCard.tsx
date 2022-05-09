/* React stuff */
import React, { useMemo } from 'react';
import { Text, View } from 'react-native'

/* Modules */
import styled from 'styled-components/native';

/* Styled components */
const ProductCardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  padding: 0 8px 16px 8px;
  
  `;

const ImageContainer = styled.Image`
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

const ShadowDataContainer = styled.View`
border-radius: 5px;
  border: 1px solid #8d63ff;
`;

export default function ProductCard({ productData }) {
  const rondomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <ProductCardContainer>
      {/* <Text>{`${productData.rating.count}`}</Text> */}
      <ShadowDataContainer style={{
        width: '100%', shadowColor: '#8d63ffe9',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3
      }} >
        <ImageContainer
          randomBool={rondomBool}
          source={{
            uri: productData.image,
          }}
          resizeMode="cover"
        />
        <Text style={{ position: 'absolute', top: 14, right: 14 }}>❤️</Text>
        <ImageDataContainer >
          <Text style={{ color: 'white', marginBottom: 0, fontWeight: 'bold' }} numberOfLines={1} >{`${productData.title}`}</Text>
          <Text style={{ color: 'white', marginBottom: 8 }} >{`${productData.category}`}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
            <Text style={{ color: 'white' }} >{`${productData.price}`} <Text style={{ fontSize: 9 }}>FRQTAL</Text></Text>
             <Text style={{ fontSize: 12, color: 'white' }}>{`${productData.rating.rate}`}   ❤️</Text>
          </View>
        </ImageDataContainer>
      </ShadowDataContainer>
    </ProductCardContainer>
  );
};

