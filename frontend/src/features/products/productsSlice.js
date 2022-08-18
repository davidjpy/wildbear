import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

export const extendedProductsSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/api/products',
            transformResponse: responseData => {
                return productsAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: 'Product', id: 'LIST' },
                ...result.ids.map(id => ({ type: 'Product', id }))
            ]
        }),
    })
});

export const {
    useGetProductsQuery,
} = extendedProductsSlice;

export const selectProductsResult = extendedProductsSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(
    selectProductsResult,
    productsResult => productsResult.data
);

export const {
    selectAll: selectAllProducts,
    selectById: selectProductsById
} = productsAdapter.getSelectors(state => selectProductsData(state) ?? initialState);

export const selectProductByCategory = createSelector(
    selectAllProducts,
    (productsResult, category) => productsResult.filter(item => item.category === category)
);
