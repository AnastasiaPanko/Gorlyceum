import React from 'react';
import styles from '../MainPage/MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.mainBlock}>
            <img
                className={styles.mainImg}
                src={require('../UI/img/mainPage.jpg')}
            />
            <div className={styles.container}>
                <h2 className={styles.firstTitle}>IT'S TIME TO</h2>
                <h1 className={styles.secondTitle}>GET BACK TO SCHOOL</h1>
            </div>
        </div>
    );
};

export default MainPage;
