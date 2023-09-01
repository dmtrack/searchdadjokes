import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = process.env.SERVER_URL;

export const movieApi = createApi({
    reducerPath: 'movieApi',
    tagTypes: ['Movie'],
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getJokes: build.query({
            query: (query) => `/api/movies/${query}`,
        }),
    }),
});

export const { useGetJokesQuery } = movieApi;
