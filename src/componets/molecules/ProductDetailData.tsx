/* React stuff */
import React from 'react';
import { View, StyleSheet } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Components */
import Badge from '../../componets/atoms/Badge';
import CustomText from '../../componets/atoms/CustomText';

/* Types */
import { RootStackParamList } from '../../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../../componets/atoms/CustomButton';
import SwitchBadge from '../../componets/atoms/SwitchBadge';
import { deleteProduct } from '../../services/products';
import { useMutation } from 'react-query';

type SearchProductType = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

const ProductDataContainer = styled.View`
  margin: 0 8px 0 8px;
`;

const ProductDetailStyles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default function ProductDetailData({ navigation, route }: SearchProductType | any) {
    const DeleteProductMutation = useMutation(newItemData => deleteProduct(newItemData));

    return (
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
                <CustomButton pink borderRight={7} text='Eliminar' onPressFunction={() => DeleteProductMutation.mutate(route.params.id)/* navigation.navigate('SearchProduct', {...route.params, urlImage: route.params.image, price: `${route.params.price}`, fromScreen: 'ProductDetails'}) */} ></CustomButton>
                <CustomButton purple borderLeft={7} text='Editar' onPressFunction={() => navigation.navigate('CreateEditProduct', {...route.params, urlImage: route.params.image, price: `${route.params.price}`, fromScreen: 'ProductDetails'})} ></CustomButton>
            </View>
        </ProductDataContainer>
    );
};
