import { NextResponse } from 'next/server';

type SearchResultType = Promise<IMovieContainer> | Promise<ErrorType>;

interface IMovieContainer {
    Search: IMovie[];
    totalResults: string;
}

interface SearchResponce {
    movies: IMovieContainer;
}

interface IMovie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

type ErrorType = {
    code: number;
    type: string;
    message: string;
};
