/* React stuff */
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

/* Modules */
import { Formik } from 'formik';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation, useQuery } from 'react-query';

/* Components */
import { AsyncAlert } from '../components/atoms/CustomAlert';
import CustomButton from '../components/atoms/CustomButton';
import CustomTextInput from '../components/atoms/CustomInputText';
import CustomText from '../components/atoms/CustomText';
import SwitchBadge from '../components/atoms/SwitchBadge';

/* Endpoints */
import { createProduct, getAllCategories, updateProduct } from '../services/products';

/* Styles */
import styles from '../styles/global';

/* Types */
import { RootStackParamList } from '../../App';

type SearchProductType = NativeStackScreenProps<RootStackParamList>;

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
    });

    /* Functions */
    const handleCreateProduct = () => {
        const { title, price, urlImage, description } = state;
        
        if (title && price && urlImage && description) {
            CreateProductMutation.mutate(state)
        } else {
            AsyncAlert({
                title: 'Ocurrio un error',
                message: 'Para guardar, todos los campos deben ser llenados',
                buttonText: 'Continuar'
            })
        }
    };

    const handleUpdateProduct = () => {
        const { title, price, urlImage, description } = state;

        if (title && price && urlImage && description) {
            UpdateProductMutation.mutate(state)
        } else {
            AsyncAlert({
                title: 'Ocurrio un error',
                message: 'Para actualizar, todos los campos deben ser llenados',
                buttonText: 'Continuar'
            })
        }
    };

    /* Effects */
    useEffect(() => { /* Getting all categories data *///@ts-ignore
        CategoriesMutation.data && setCategories(() => CategoriesMutation.data)
    }, [CategoriesMutation.data]);

    useEffect(() => { /* Showing success message */
        /* New product message */
        CreateProductMutation.isSuccess && AsyncAlert({
            title: 'Producto creado',
            message: 'Se ha creado el producto exitosamente',
            buttonText: 'Continuar'
        }).then(() => navigation.navigate(route.params.fromScreen === 'SearchProduct' ? 'SearchProduct' : 'ProductDetails', route.params && route.params));

        /* Update message */
        UpdateProductMutation.isSuccess && AsyncAlert({
            title: 'Producto actualizado',
            message: 'Se ha actualizado el producto exitosamente',
            buttonText: 'Continuar'
        }).then(() => navigation.navigate(route.params.fromScreen === 'SearchProduct' ? 'SearchProduct' : 'ProductDetails', route.params && route.params));
    }, [CreateProductMutation.isSuccess, UpdateProductMutation.isSuccess]);

    return (
        <Formik
            initialValues={state}
            onSubmit={() => route.params.fromScreen === 'SearchProduct' ? handleCreateProduct() : handleUpdateProduct()}
        >
            {({ handleSubmit }) => (
                <View style={{ ...styles.globalWrapper }} >
                    <ScrollView >
                        <CustomText marginLeft={8} marginTop={8} fontSize={16} white text={'Nuevo producto'} />

                        <View>
                            <CustomText marginLeft={8} marginTop={16} white text={'Título'} />
                            <CustomTextInput fieldToFill={'title'} parentState={{ state, setState }} placeHolder='Título del producto' />
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
                            <CustomText marginLeft={8} marginTop={16} white text={'Descripción'} />
                            <CustomTextInput multiline numberOfLines={8} fieldToFill={'description'} parentState={{ state, setState }} />
                        </View>
                        <View>
                            <CustomText marginLeft={8} marginTop={16} white text={'Categoría'} />
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }} >
                                {categories.map(category => <SwitchBadge categorySwitcher={categorySwitcher} parentState={{ state, setState }} switchable key={`${category}-key`} margin={7} text={category} />)}
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, marginTop: 8, justifyContent: 'space-between' }} >
                        <CustomButton pink borderRight={7} text='Cancelar' onPressFunction={() => navigation.navigate(route.params.fromScreen, route.params)} ></CustomButton>
                        <CustomButton green borderLeft={7} text={route.params.fromScreen === 'SearchProduct' ? 'Crear' : 'Guardar'} onPressFunction={handleSubmit} ></CustomButton>
                    </View>
                </View>
            )}
        </Formik>
    );
};
