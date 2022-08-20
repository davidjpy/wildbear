import { createSelector, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

/* RTK Query for CRUD operations */
const productsAdapter = createEntityAdapter();

const adapterInitialState = productsAdapter.getInitialState();

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
} = productsAdapter.getSelectors(state => selectProductsData(state) ?? adapterInitialState);

/* RTK for managing global state */
const initialState = {
    paginationRange: [0, 3]
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updatePaginationRange: {
            reducer(state, action) {
                const { pageNum, dataLength } = action.payload;

                if (pageNum <= 2) {
                    state.paginationRange[0] = 0;
                    if (!pageNum === 1) {
                        state.paginationRange[1] = pageNum + 1;
                    } else {
                        state.paginationRange[1] = pageNum + 2;
                    }
                } else if (pageNum > dataLength - 1) {
                    state.paginationRange[0] = pageNum - 3;
                    state.paginationRange[1] = dataLength;
                } else {
                    state.paginationRange[0] = pageNum - 2;
                    state.paginationRange[1] = pageNum + 1;
                } 
            }
        },
        resetPaginationRange: {
            reducer(state) {
                state.paginationRange[0] = 0;
                state.paginationRange[1] = 3;
            }
        }
    }
});

export const selectPaginationRange = (state) => state.products.paginationRange;

export const { updatePaginationRange, resetPaginationRange } = productsSlice.actions;

export default productsSlice.reducer;