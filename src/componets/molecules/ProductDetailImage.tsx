/* React stuff */
import React from 'react';
import { Image } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Components */
import Badge from '../atoms/Badge';

/* Images */
const BackButtonImage = require('../../assets/images/back-arrow.png');

/* Types */
import { RootStackParamList } from '../../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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

export default function ProductDetailImage({ navigation, route }: SearchProductType | any) {
    return (
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
    );
};
