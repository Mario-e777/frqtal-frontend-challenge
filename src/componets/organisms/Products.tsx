/* React stuff */
import React, { useEffect, useState } from 'react';

/* Modules */
import { useQuery } from 'react-query';
import MasonryList from '@react-native-seoul/masonry-list';

/* Components */
import ProductCard from '../molecules/ProductCard';

/* Endpoints & utils */
import { getAllProducts } from '../../services/products';
import { getAllUsers } from '../../services/users';

/* Types */
import { SearchProductType } from '../../screens/SearchProducts';
import { ProductDataI } from '../molecules/ProductCard';

export default function Products({ navigation }: { navigation: SearchProductType['navigation'] }) {
    /* Hooks */
    const ProductsMutation = useQuery<any, Error>('get-all-products', getAllProducts);
    const UsersMutation = useQuery<any, Error>('get-all-users', getAllUsers);

    /* States */
    const [productsToShow, setProductsToShow] = useState<Array<ProductDataI>>([]);
    const [allUsers, setAllUsers] = useState<Array<{ username: string }>>([]);

    /* Effects */
    useEffect(() => { /* Getting all products data */
        ProductsMutation.data && setProductsToShow(() => ProductsMutation.data)
    }, [ProductsMutation.data]);

    useEffect(() => { /* Getting all users data */
        UsersMutation.data && setAllUsers(() => UsersMutation.data)
    }, [UsersMutation.data]);

    return (
        <MasonryList
            keyExtractor={item => `product-${item.id}`}
            data={productsToShow}
            numColumns={2}
            showsVerticalScrollIndicator={true}
            onRefresh={() => ProductsMutation.refetch()}
            contentContainerStyle={{ alignSelf: 'stretch' }}
            renderItem={({ item }) => <ProductCard
                navigation={navigation}
                /* Setting rondom user name to each product card */
                userName={allUsers[Math.floor(Math.random() * allUsers.length)]?.username}
                productData={item}
            />}
            loading={ProductsMutation.isLoading}
        />
    );
};
