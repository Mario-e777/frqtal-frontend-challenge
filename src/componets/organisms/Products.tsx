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

export default function Products() {
    /* Hooks */
    const ProductsMutation = useQuery('get-all-products', getAllProducts);
    const UsersMutation = useQuery('get-all-users', getAllUsers);

    /* States */
    const [productsToShow, setProductsToShow] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

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
            renderItem={({ item }) => <ProductCard
                userName={allUsers[Math.floor(Math.random() * (allUsers.length))]?.username}
                productData={item}
            />}
            contentContainerStyle={{
                alignSelf: 'stretch',
            }}
            onRefresh={() => ProductsMutation.refetch()}
        />
    );

};

