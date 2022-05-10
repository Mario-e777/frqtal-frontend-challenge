/* React stuff */
import React, { useEffect, useState } from 'react';

/* Modules */
import { useQuery } from 'react-query';
import MasonryList from '@react-native-seoul/masonry-list';

/* Components */
import ProductCard from '../molecules/ProductCard';

/* Endpoints & utils */
import { getAllProducts } from '../../services/products';

export default function Products() {
    /* Hooks */
    const [productsToShow, setProductsToShow] = useState([]);
    const ProductsMutation = useQuery('get-all-products', getAllProducts);

    /* Effects */
    useEffect(() => { /* Getting all products data */
        ProductsMutation.data && setProductsToShow(() => ProductsMutation.data)
    }, [ProductsMutation.data]);

    return (
        <MasonryList
            keyExtractor={item => `product-${item.id}`}
            data={productsToShow}
            numColumns={2}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => <ProductCard
                productData={item}
            />}
            contentContainerStyle={{
                alignSelf: 'stretch',
            }}
            onRefresh={() => ProductsMutation.refetch()}
        />
    );

};

