import styles from './CardList.module.scss';
import layoutStyles from '../Layout/Layout.module.scss';
import { IJoke } from '../../types';
import JokeCard from '../JokeCard';
import { useRouter } from 'next/router';
import cn from 'classnames';
import firasans from '../../utils/fonts/firasans';

interface IJokeCardListProps {
    cards: IJoke[];
}

function JokeCardList({ cards }: IJokeCardListProps) {
    const router = useRouter();

    return (
        <>
            <div className={styles.topContainer}>
                {cards &&
                    cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={styles.joke}
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                router.push(`/${card.id}`);
                            }}>
                            <JokeCard card={card} />
                        </div>
                    ))}
            </div>
            {!cards.length && (
                <div className={layoutStyles.section}>
                    <div className={cn(firasans.className, styles.text)}>
                        No jokes with such words
                    </div>
                </div>
            )}
        </>
    );
}

export default JokeCardList;
