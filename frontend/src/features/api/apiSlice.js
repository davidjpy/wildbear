import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://e-commerce-env.eba-ukdr3bz2.ap-east-1.elasticbeanstalk.com/' }),
    tagTypes: ['Product'],
    endpoints: builder => ({})
});