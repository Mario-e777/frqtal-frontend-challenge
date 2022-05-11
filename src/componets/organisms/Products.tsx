/* React stuff */
import React from 'react';

/* Modules */
import MasonryList from '@react-native-seoul/masonry-list';

/* Components */
import ProductCard, { ProductDataI } from '../molecules/ProductCard';

/* Types */
import { SearchProductType } from '../../screens/SearchProducts';

export default function Products({ navigation, filterByText, productsToShow, ProductsMutation, allUsers, filterByCategory }: { navigation: SearchProductType['navigation'], filterByText: string, filterByCategory?: string; allUsers?: Array<{ username: string }>, ProductsMutation?: any, productsToShow?: Array<ProductDataI> }) {
    return (
        <MasonryList
            keyExtractor={item => `product-${item.id}`}
            data={productsToShow}
            numColumns={2}
            showsVerticalScrollIndicator={true}
            onRefresh={() => ProductsMutation.refetch()}
            contentContainerStyle={{ alignSelf: 'stretch' }}
            renderItem={({ item }) => {
                if (filterByText !== '' && filterByCategory !== '') {
                    if (item.title.includes(filterByText) && item.category.includes(filterByCategory)) {
                        return <ProductCard
                            key={`product-card-${item.id}`}
                            navigation={navigation}
                            /* Setting rondom user name to each product card */
                            userName={allUsers[Math.floor(Math.random() * allUsers.length)]?.username}
                            productData={item}
                        />
                    }
                } else if (filterByText !== '') {
                    if (item.title.includes(filterByText)) {
                        return <ProductCard
                            key={`product-card-${item.id}`}
                            navigation={navigation}
                            /* Setting rondom user name to each product card */
                            userName={allUsers[Math.floor(Math.random() * allUsers.length)]?.username}
                            productData={item}
                        />
                    }
                } else if (filterByCategory) {
                    if (item.category === filterByCategory) {
                        return <ProductCard
                            key={`product-card-${item.id}`}
                            navigation={navigation}
                            /* Setting rondom user name to each product card */
                            userName={allUsers[Math.floor(Math.random() * allUsers.length)]?.username}
                            productData={item}
                        />
                    }
                } else if (filterByText === '' && !filterByCategory) {
                    return <ProductCard
                        key={`product-card-${item.id}`}
                        navigation={navigation}
                        /* Setting rondom user name to each product card */
                        userName={allUsers[Math.floor(Math.random() * allUsers.length)]?.username}
                        productData={item}
                    />
                }

            }}
            loading={ProductsMutation.isLoading}
        />
    );
};
