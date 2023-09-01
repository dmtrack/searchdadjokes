import styles from './CardList.module.scss';
import layoutStyles from '../Layout/Layout.module.scss';
import { IMovie } from '../../types';
import MovieCard from '../MovieCard';
import { useRouter } from 'next/router';
import cn from 'classnames';
import firasans from '../../utils/fonts/firasans';

interface IMovieCardListProps {
    cards: IMovie[];
}

function MovieCardList({ cards }: IMovieCardListProps) {
    const router = useRouter();
    return (
        <>
            <div className={styles.topContainer}>
                {cards &&
                    cards.map((card, index) => (
                        <div
                            key={card.imdbID}
                            className={styles.joke}
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                router.push(`/${card.imdbID}`);
                            }}>
                            <MovieCard card={card} />
                        </div>
                    ))}
            </div>
            {!cards.length && (
                <div className={layoutStyles.section}>
                    <div className={cn(firasans.className, styles.text)}>
                        No movies found
                    </div>
                </div>
            )}
        </>
    );
}

export default MovieCardList;
