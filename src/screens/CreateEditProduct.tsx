/* React stuff */
import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

/* Modules */
import { useQuery } from 'react-query';

/* Components */
import Expander from '../componets/molecules/Expander';
import SwitchBadge from '../componets/atoms/SwitchBadge';

/* Endpoints & utils */
import { getAllCategories } from '../services/products';

/* Styles */
import styles from '../styles/global';

/* Types */
import { RootStackParamList } from '../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomText from '../componets/atoms/CustomText';
import CustomTextInput from '../componets/atoms/CustomInputText';
import CustomButton from '../componets/atoms/CustomButton';

type SearchProductType = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

/* Vars */
/* Category switcher to controll category serected */
let categorySwitcher = {};

export default function CreateEditProduct({ navigation, route }: SearchProductType | any) {
    const CategoriesMutation = useQuery('get-all-Categories', getAllCategories);

    const [categories, setCategories] = useState<Array<string>>([]);
    const [state, setState] = useState({
        title: '',
        price: '',
        urlImage: '',
        description: ''
    });

    useEffect(() => { /* Getting all categories data *///@ts-ignore
        CategoriesMutation.data && setCategories(() => CategoriesMutation.data)
    }, [CategoriesMutation.data]);


    return (
        <View style={{ ...styles.globalWrapper }} >
            <ScrollView >
                <CustomText marginLeft={8} marginTop={8} fontSize={16} white text={'Nuevo producto'} />

                <View>
                    <CustomText marginLeft={8} marginTop={16} white text={'Titulo'} />
                    <CustomTextInput fieldToFill={'title'} parentState={{ state, setState }} placeHolder='Titulo del producto' />
                </View>
                <View>
                    <CustomText marginLeft={8} marginTop={16} white text={'Precio (FRQTAL)'} />
                    <CustomTextInput fieldToFill={'price'} parentState={{ state, setState }} numeric placeHolder='0.0 FRQTAL' />
                </View>
                <View>
                    <CustomText marginLeft={8} marginTop={16} white text={'Imagen'} />
                    <CustomTextInput fieldToFill={'urlImage'} parentState={{ state, setState }} placeHolder='https://www.mysite.com/image.png' />
                </View>
                <View>
                    <CustomText marginLeft={8} marginTop={16} white text={'Descripcion'} />
                    <CustomTextInput textArea multiline numberOfLines={8} fieldToFill={'description'} parentState={{ state, setState }} />
                </View>
                <View>
                    <CustomText marginLeft={8} marginTop={16} white text={'Categoria'} />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }} >
                        {categories.map(category => <SwitchBadge categorySwitcher={categorySwitcher} parentState={{ state, setState }} switchable key={`${category}-key`} margin={7} text={category} />)}
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, marginTop: 8, justifyContent: 'space-between' }} >
                <CustomButton borderRight={7} text='Eliminar' ></CustomButton>
                <CustomButton borderLeft={7} text='Editar' ></CustomButton>
            </View>
        </View>
    );
};
