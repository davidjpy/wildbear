import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
    tagTypes: ['Product'],
    endpoints: builder => ({})
});