import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import styles from './LatestNews.module.css';
import News from './News/News';

const LatestNews = (props: any) => {
    console.log(
        '🚀 ~ file: LatestNews.tsx ~ line 6 ~ LatestNews ~ props',
        props
    );
    return (
        <div className={styles.colorDiv}>
            <div className={styles.margin}>
                <h1 className={styles.caption}>LATEST NEWS</h1>
                <div className={styles.flexBox}>
                    <News className={styles.marginLeft} news={props.news[0]} />
                    <News news={props.news[1]} />
                </div>
                <div className={styles.center}>
                    <MyButton className={styles.button}>See all news</MyButton>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
