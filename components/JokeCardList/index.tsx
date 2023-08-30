import styles from './CardList.module.scss';
import { IJoke } from '../../types';
import JokeCard from '../JokeCard';

interface IJokeCardListProps {
    cards: IJoke[];
}

function JokeCardList({ cards }: IJokeCardListProps) {
    console.log(cards, 'cards in list');
    return (
        <div className={styles.section}>
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <div key={card.id}>
                        {index < 2 ? (
                            <JokeCard card={card} type='big' />
                        ) : (
                            <JokeCard card={card} type='normal' />
                        )}
                    </div>
                ))
            ) : (
                <div className={styles.text}>No jokes with such words</div>
            )}
        </div>
    );
}

export default JokeCardList;
