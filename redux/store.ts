'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { jokesApi } from './api/jokesApi';

const rootReducer = combineReducers({
    [jokesApi.reducerPath]: jokesApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat(jokesApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type GetState = () => RootState;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
