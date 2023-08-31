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
    const dateArray = card.created_at.split(' ')[0].split('-');

    const timeStamp = `${dateArray[2]}.${+dateArray[1]}.${dateArray[0]}`;
    return (
        <>
            {' '}
            <div className={cardstyles.stamp_container}>
                <div className={cn(liststyles.text, firasans.className)}>
                    {card.value.length < 150
                        ? card.value
                        : `${card.value.slice(0, 149)}...`}
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
