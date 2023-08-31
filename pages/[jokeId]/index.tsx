import { useRouter } from 'next/router';
import RootLayout from '../layout';
import styles from '../../components/JokeCard/Card.module.scss';
import firasans from '../../utils/fonts/firasans';
import cn from 'classnames';

function Joke() {
    const router = useRouter();
    const jokeId = router.query.jokeId;

    return (
        <>
            <RootLayout>
                <div className={cn(styles.text, firasans.className)}>
                    Joke page with id: {jokeId}
                </div>
            </RootLayout>
        </>
    );
}

export default Joke;
