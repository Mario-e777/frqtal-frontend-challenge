/* React stuff */
import React, { useEffect, useState } from 'react';

/* Modules */
import styled from 'styled-components/native';
import { useQuery } from 'react-query';
import MasonryList from '@react-native-seoul/masonry-list';

/* Components */
import ProductCard from '../molecules/ProductCard';

/* Endpoints & utils */
import { getAllProducts } from '../../services/products';

export default function Products() {
    const [images, setImages] = useState([]);
    const ProductsMutation: any = useQuery('get-all-products', getAllProducts);

    useEffect(() => {
        ProductsMutation.data && setImages((prev) => ProductsMutation.data)
    }, [ProductsMutation.data]);

    return (
        <MasonryList
            data={images}
            keyExtractor={(item, index): string => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard
                productData={item}
            />}
            contentContainerStyle={{
                
                alignSelf: 'stretch',
            }}
        /* refreshing={isLoadingNext}
        onRefresh={() => refetch({ first: ITEM_CNT })}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadNext(ITEM_CNT)} */
        />
    );

};

