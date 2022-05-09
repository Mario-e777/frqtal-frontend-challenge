/* React stuff */
import React from 'react';

/* Modules */
import styled from 'styled-components/native';
import { useQuery } from 'react-query';

/* Components */
import ProductCard from '../molecules/ProductCard';

/* Endpoints & utils */
import { getAllProducts } from '../../services/products';

/* Styled components */
const ProductCardContainer = styled.FlatList`
`;

export default function Products() {
    const ALL_PRODUCTS: any = useQuery('get-all-products', getAllProducts);

    return (
        <ProductCardContainer
            data={ALL_PRODUCTS.data}
            renderItem={({ item }) => {
                return <ProductCard 
                    key={`product-${item.id}`} 
                    productData={item}
                />
            }}
        />
    );
};

