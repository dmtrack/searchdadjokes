import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = process.env.SERVER_URL;

export const jokesApi = createApi({
    reducerPath: 'jokesApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getJokes: build.query({
            query: (query) => `/api/jokes/${query}`,
        }),
    }),
});

export const { useGetJokesQuery } = jokesApi;
