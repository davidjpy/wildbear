import { createSelector, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

/* RTK Query for CRUD operations */
const productsAdapter = createEntityAdapter();

const adapterInitialState = productsAdapter.getInitialState();

export const extendedProductsSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/api/products/',
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

export const selectNewProductsData = createSelector(
    selectAllProducts,
    newProductsResult => newProductsResult.sort((a, b) => a.id - b.id).slice(-6)
);

/* RTK for managing global state */
const initialState = {
    paginationRange: [0, 3],
    cartItem: []
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
        },
        updateCartItem: {
            reducer(state, action) {
                if (action.payload.length > 0) {
                    state.cartItem = action.payload;
                } else {
                    let isExist = false;
                    state.cartItem = state.cartItem.map((item) => {
                        if (item.id === action.payload.id) {
                            isExist = true;
                            return { ...item, quantity: Number(item.quantity) + Number(action.payload.quantity) }
                        }
                        return item;
                    });
    
                    if (!isExist) {
                        state.cartItem = [...state.cartItem, action.payload];
                    }
                    isExist = false;
                }
            }
        },
        removeCartItem: {
            reducer(state, action) {
                if (!action.payload) {
                    state.cartItem = [];
                } else {
                    state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
                }
            }
        }
    }
});

export const selectPaginationRange = (state) => state.products.paginationRange;
export const selectCartItem = (state) => state.products.cartItem;

export const {
    updatePaginationRange,
    resetPaginationRange,
    updateCartItem,
    removeCartItem
} = productsSlice.actions;

export default productsSlice.reducer;