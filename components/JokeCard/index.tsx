import montserrat from '../../utils/fonts/montserrat';
import firasans from '../../utils/fonts/firasans';
import cn from 'classnames';
import stylesNormal from './CardNormal.module.scss';
import stylesBig from './CardBig.module.scss';
import { IJoke } from '../../types';

interface IJokeCardProps {
    card: IJoke;
    type: 'big' | 'normal';
}

function JokeCard({ card, type }: IJokeCardProps) {
    const style = type === 'big' ? stylesBig : stylesNormal;
    return (
        <div className={style.section}>
            <div className={style.topContainer}>
                <div className={cn(style.text, firasans.className)}>
                    {card.value}
                </div>
            </div>
        </div>
    );
}

export default JokeCard;
