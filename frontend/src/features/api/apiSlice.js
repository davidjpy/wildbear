import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://camping-gear-api.com' }),
    tagTypes: ['Product'],
    endpoints: builder => ({})
});