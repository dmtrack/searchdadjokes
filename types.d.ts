import { NextResponse } from 'next/server';

type SearchResultType = Promise<JokeContainer> | Promise<ErrorType>;

interface JokeContainer {
    total: number;
    result: IJoke[];
}

interface SearchResponce {
    data: JokeContainer;
}

interface IJoke {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

type ErrorType = {
    code: number;
    type: string;
    message: string;
};
