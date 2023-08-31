'use client';

import styles from './Search.module.scss';

import cn from 'classnames';
import Image from 'next/image';

import firasans from '../../utils/fonts/firasans';

import Input from '../Input';

import backgroundImage from '../../assets/images/background-image.png';
import { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { useGetJokesQuery } from '../../redux/api/jokesApi';
import JokeCardList from '../JokeCardList';
import { useDebounce } from '../../hooks/useDebounce';

function Search() {
    const [search, setSearch] = useState('');
    const input = useInput();
    const debounced = useDebounce(input.value);

    useEffect(() => {
        if (debounced.length > 3) {
            setSearch(debounced);
        }
    }, [debounced]);

    const { data } = useGetJokesQuery(search);
    const dataResult = data?.jokes.result.slice(0, 8);

    return (
        <>
            <section className={styles.section}>
                <Input
                    type='text'
                    placeholder='Search'
                    className={cn(styles.input, firasans.className)}
                    {...input}
                />
            </section>
            <div>{dataResult && <JokeCardList cards={dataResult} />}</div>
        </>
    );
}

export default Search;
