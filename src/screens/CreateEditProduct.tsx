/* React stuff */
import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

/* Modules */
import { useMutation, useQuery } from 'react-query';
import { Formik } from 'formik';

/* Components */
import SwitchBadge from '../componets/atoms/SwitchBadge';

/* Endpoints & utils */
import { getAllCategories, createProduct, updateProduct } from '../services/products';

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
    /* Data hooks */
    const CategoriesMutation = useQuery('get-all-Categories', getAllCategories);
    const CreateProductMutation = useMutation(newItemData => createProduct(newItemData));
    const UpdateProductMutation = useMutation(newItemData => updateProduct(newItemData));

    /* States */
    const [categories, setCategories] = useState<Array<string>>([]);
    const [state, setState] = useState(route.params ? route.params : {
        title: '',
        price: '',
        urlImage: '',
        description: '',
        category: ''
    });

    /* Effects */
    useEffect(() => { /* Getting all categories data *///@ts-ignore
        CategoriesMutation.data && setCategories(() => CategoriesMutation.data)
    }, [CategoriesMutation.data]);

    return (
        <Formik
            initialValues={state}
            onSubmit={() => route.params.fromScreen === 'SearchProduct' ? CreateProductMutation.mutate(state) : UpdateProductMutation.mutate(state)}
        >
            {({ handleSubmit }) => (
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
                        <CustomButton borderRight={7} text='Cancelar' onPressFunction={() => navigation.navigate(route.params.fromScreen, route.params)} ></CustomButton>
                        <CustomButton borderLeft={7} text='Crear' onPressFunction={handleSubmit} ></CustomButton>
                    </View>
                </View>
            )}
        </Formik>
    );
};
