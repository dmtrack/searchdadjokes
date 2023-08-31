import styles from './CardList.module.scss';
import { IJoke } from '../../types';
import JokeCard from '../JokeCard';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IJokeCardListProps {
    cards: IJoke[];
}

function JokeCardList({ cards }: IJokeCardListProps) {
    const router = useRouter();
    const pageSwitcher = (id: string) => {
        router.push(`/${id}`);
    };
    return (
        <div className={styles.topContainer}>
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={styles.joke}
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            router.push(`/${card.id}`);
                        }}>
                        <JokeCard card={card} />
                    </div>
                ))
            ) : (
                <div className={styles.text}>No jokes with such words</div>
            )}
        </div>
    );
}

export default JokeCardList;
