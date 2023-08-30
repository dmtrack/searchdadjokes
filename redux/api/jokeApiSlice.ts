import { SearchResponce } from '../../types';
import { Methods } from '../redux.types';
import apiSlice from './apiSlice';

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJokes: builder.query<SearchResponce, string>({
            query: (query: string) => ({
                url: `api/jokes/${query}`,
                method: Methods.get,
            }),
        }),
    }),
});

export const { useGetJokesQuery } = userApiSlice;
