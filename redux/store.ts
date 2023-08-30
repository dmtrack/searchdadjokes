'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';
import jokesReducer from './slices/jokeSlice';

const rootReducer = combineReducers({
    jokes: jokesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat(apiSlice.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type GetState = () => RootState;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
