import { useRouter } from 'next/router';

function Joke() {
    const router = useRouter();
    const jokeId = router.query.jokeId;

    return <>{jokeId}</>;
}

export default Joke;
