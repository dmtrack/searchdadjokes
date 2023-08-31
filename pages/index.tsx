import Head from 'next/head';
import Search from '../components/Search';

import styles from '../components/Layout/Layout.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Chacks jokes searcher</title>
            </Head>
            <main>
                <div className={styles.section}>
                    {' '}
                    <Search />
                </div>
            </main>
        </>
    );
}
