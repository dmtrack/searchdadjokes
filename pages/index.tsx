import Head from 'next/head';
import Intro from '../components/Intro';

export default function Home() {
    return (
        <>
            <Head>
                <title>Chacks jokes searcher</title>
            </Head>
            <main>
                <Intro />
            </main>
        </>
    );
}
