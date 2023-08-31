import montserrat from '../../utils/fonts/montserrat';
import firasans from '../../utils/fonts/firasans';
import cn from 'classnames';
import liststyles from '../JokeCardList/CardList.module.scss';
import cardstyles from './Card.module.scss';

import { IJoke } from '../../types';

interface IJokeCardProps {
    card: IJoke;
}

function JokeCard({ card }: IJokeCardProps) {
    const timeStampDay = new Date(card.created_at).getDate();
    const timeStampMonth = new Date(card.created_at).getMonth();
    const timeStampYear = new Date(card.created_at).getFullYear();
    const timeStamp = `${timeStampDay}.${timeStampMonth + 1}.${timeStampYear}`;
    return (
        <>
            {' '}
            <div className={cardstyles.stamp_container}>
                <div className={cn(liststyles.text, firasans.className)}>
                    {card.value}{' '}
                </div>
                <div className={cn(cardstyles.stamp, montserrat.className)}>
                    <div className={cardstyles.stamp_part}>
                        <span className={cardstyles.stamp_text}>{card.id}</span>
                        <span className={cardstyles.stamp_text}>
                            {timeStamp}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JokeCard;
