import Typography from '../../../components/Typography';
import cn from 'classnames';

import styles from '../../../components/Intro/Intro.module.scss';
import { get } from '../../../axios';
import { JokeContainer, SearchResponce } from '../../../types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context?.params?.search;
    const jokesData: JokeContainer = await get(
        `${process.env.SERVER_URL}/api/jokes/${query}`
    );
    const data = await jokesData;
    console.log(data);
    return {
        props: {
            data,
        },
    };
};

export default function SearchResults({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(data.total, 'data in search');

    return (
        <>
            <section className={styles.section}>
                {/* <div className={styles.topContainer}>
                    <Typography
                        variant='h3'
                        align='left'
                        className={openSans.className}
                        color='gray'>
                        {weather.location.name}
                    </Typography>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.weatherBlock}>
                        <div className={styles.textWrapper}>
                            <Typography
                                align='left'
                                variant='p'
                                className={cn(styles.text, openSans.className)}
                                color='dark-blue'>
                                Today
                            </Typography>
                        </div>
                        <Typography
                            className={cn(
                                openSans.className,
                                styles.infoBlocks
                            )}
                            align='left'>
                            <Chip
                                label='temp'
                                value={`${weather.current.temp_c}°C`}
                            />
                            <Chip
                                label='humidity'
                                value={`${weather.current.humidity}%`}
                            />{' '}
                            <Chip
                                label='visibility'
                                value={`${weather.current.vis_km}km`}
                            />
                            <Chip
                                label='cloud'
                                value={`${weather.current.cloud}%`}
                            />
                            <Chip
                                label='w-dir'
                                value={`${weather.current.wind_dir}°`}
                            />
                        </Typography>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.textWrapper}>
                            <Typography
                                align='left'
                                variant='p'
                                className={cn(styles.text, openSans.className)}
                                color='dark-blue'>
                                5-days forecast
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={styles.line} /> */}
            </section>
        </>
    );
}
