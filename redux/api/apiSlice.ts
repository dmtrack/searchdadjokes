import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const url = `http://${process.env.NEXT_PUBLIC_API_DOMAIN}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api`;

const url = process.env.SERVER_URL;

const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');

            return headers;
        },
    }),
    tagTypes: ['Jokes'],
    endpoints: () => ({}),
});

export default apiSlice;
