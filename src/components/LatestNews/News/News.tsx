import React from 'react';
import MyLink from '../../UI/link/MyLink';
import styles from './News.module.css';

const News = (props: any) => {
    return (
        <div className={styles.flexBlock}>
            <img
                className={styles.image}
                src={require('./../../UI/img/redPanda.png')}
            />
            <div className={styles.textBlock}>
                <h1 className={styles.newsCaption}>{props.news.caption}</h1>
                <p className={styles.newsData}>{props.news.data}</p>
                <p className={styles.newsDescription}>
                    {props.news.description}
                </p>
                <MyLink className={styles.newsLink}>Read more</MyLink>
            </div>
        </div>
    );
};

export default News;
