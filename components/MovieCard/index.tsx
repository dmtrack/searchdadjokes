import montserrat from '../../utils/fonts/montserrat';
import firasans from '../../utils/fonts/firasans';
import cn from 'classnames';
import liststyles from '../MovieCardList/CardList.module.scss';
import cardstyles from './Card.module.scss';
import Image from 'next/image';

import { IMovie } from '../../types';

interface IMovieCardProps {
    card: IMovie;
}

function MovieCard({ card }: IMovieCardProps) {
    return (
        <>
            {' '}
            <div className={cardstyles.stamp_container}>
                <div className={liststyles.movie}>
                    <div className={cn(liststyles.text, firasans.className)}>
                        {card.Title}
                    </div>
                    {card.Poster === 'N/A' ? (
                        ''
                    ) : (
                        <div className={liststyles.image}>
                            <Image
                                src={card.Poster}
                                width={50}
                                height={75}
                                alt='poster'
                            />
                        </div>
                    )}
                </div>

                <div className={cn(cardstyles.stamp, montserrat.className)}>
                    <div className={cardstyles.stamp_part}>
                        <span className={cardstyles.stamp_text}>
                            {card.imdbID}
                        </span>
                        <span className={cardstyles.stamp_text}>
                            {card.Year}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
