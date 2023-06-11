import React from 'react';
import styles from './RequestInformation.module.css';

const RequestInformation = () => {
    return (
        <div className={styles.sizeBox}>
            <button className={styles.button}>
                <div className={styles.flexBlock}>
                    <div className={styles.informationBlock}>
                        <img
                            className={styles.image}
                            src={require('./../UI/img/ico_information.png')}
                        />
                        <div className={styles.textBlock}>
                            <h1 className={styles.caption}>
                                REQUEST INFORMATION
                            </h1>
                            <p className={styles.description}>
                                DO YOU HAVE SOME QUESTIONS? FILL THE FORM AND
                                GET AN ANSWER!
                            </p>
                        </div>
                    </div>
                    <div className={styles.arrowDiv}>
                        <img
                            src={require('./../UI//img/bg_arrow_information.png')}
                        />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default RequestInformation;
