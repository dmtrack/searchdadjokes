'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IJoke } from '../../types';
import { ISetJokePayload } from '../types';

type InitialStateType = {
    jokes?: IJoke[];
};

const initialState: InitialStateType = {
    jokes: [],
};

export const jokes = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        setJokes: (state, { payload }: PayloadAction<ISetJokePayload>) => {
            state.jokes = payload.jokes;
        },
    },
});

export const { setJokes } = jokes.actions;
export default jokes.reducer;
