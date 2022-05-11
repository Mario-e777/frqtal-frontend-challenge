/* React stuff */
import React from 'react';

/* Modules */
import MasonryList from '@react-native-seoul/masonry-list';

/* Components */
import ProductCard, { ProductDataI } from '../molecules/ProductCard';

/* Types */
import { SearchProductType } from '../../screens/SearchProducts';

export default function Products({ navigation, filterByText, productsToShow, ProductsMutation, allUsers, filterByCategory }
    : {
        navigation: SearchProductType['navigation'],
        filterByText: string,
        filterByCategory?: string | any;
        allUsers: Array<{ username: string }>,
        ProductsMutation?: any,
        productsToShow?: Array<ProductDataI> | any
    }) {

    /* Functions */
    const productCardHandler = ({ item }: { item: ProductDataI }) => (
        <ProductCard
            key={`product-card-${item.id}`}
            navigation={navigation}
            /* Setting rondom user name to each product card */
            userName={allUsers[Math.floor(Math.random() * allUsers.length)]?.username}
            productData={item}
        />
    );

    const filterBy = ({ item }: { item: ProductDataI }) => {
        if (filterByText !== '' && (filterByCategory && filterByCategory !== '')) { /* Filter by text and category */
            if (item.title.includes(filterByText) && item.category.includes(filterByCategory)) {
                return productCardHandler({ item });
            }
        } else if (filterByText !== '') { /* Filter by text */
            if (item.title.includes(filterByText)) {
                return productCardHandler({ item });
            }
        } else if (filterByCategory && filterByCategory !== '') { /* Filter by category */
            if (item.category === filterByCategory) {
                return productCardHandler({ item });
            }
        } else { /* No filters */
            return productCardHandler({ item });
        }
    };

    return (
        <MasonryList
            keyExtractor={item => `product-${item.id}`}
            data={productsToShow}
            numColumns={2}
            showsVerticalScrollIndicator={true}
            onRefresh={() => ProductsMutation.refetch()}
            contentContainerStyle={{ alignSelf: 'stretch' }}//@ts-ignore
            renderItem={({ item }) => filterBy({ item })}
            loading={ProductsMutation.isLoading}
        />
    );
};
