import { useRouter } from 'next/router';
import RootLayout from '../../components/Layout/layout';

function Joke() {
    const router = useRouter();
    const jokeId = router.query.jokeId;

    return (
        <>
            <RootLayout>Joke page with id: {jokeId}</RootLayout>
        </>
    );
}

export default Joke;
