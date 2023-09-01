import { useRouter } from 'next/router';
import RootLayout from '../../components/Layout/layout';

function Joke() {
    const router = useRouter();
    const movieId = router.query.movieId;
    return (
        <>
            <RootLayout>Movie page with id: {movieId}</RootLayout>
        </>
    );
}

export default Joke;
