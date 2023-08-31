import styles from './CardList.module.scss';
import { IJoke } from '../../types';
import JokeCard from '../JokeCard';

interface IJokeCardListProps {
    cards: IJoke[];
}

function JokeCardList({ cards }: IJokeCardListProps) {
    return (
        <div className={styles.topContainer}>
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <div key={card.id} className={styles.joke}>
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
