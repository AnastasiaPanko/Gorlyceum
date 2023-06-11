import React from 'react';
import MyLink from '../UI/link/MyLink';
import FacebookSvg from '../UI/SVG/FacebookSvg/FacebookSvg';
import GooglePlusSvg from '../UI/SVG/GooglePlus/GoodlePlusSvg';
import LetterSvg from '../UI/SVG/LetterSvg/LetterSvg';
import MapSvg from '../UI/SVG/MapSvg/MapSvg';
import PhoneSvg from '../UI/SVG/PhoneSvg/PhoneSvg';
import PinterestSvg from '../UI/SVG/PinterestSvg/PinterestSvg';
import TwitterSvg from '../UI/SVG/TwitterSvg/TwitterSvg';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.colorDiv}>
            <div className={styles.margin}>
                <div className={styles.flexBlock}>
                    <div className={styles.contactBlock}>
                        <h1 className={styles.caption}>CONTACT</h1>
                        <MyLink
                            className={`${styles.rowDirection} ${styles.linkForContact}`}
                        >
                            <MapSvg className={styles.svgForContact} />
                            <p className={styles.description}>
                                Черкаська область, м. Городище, вул. Володимира
                                Мономаха, 3a
                            </p>
                        </MyLink>
                        <MyLink
                            className={`${styles.rowDirection} ${styles.linkForContact}`}
                        >
                            <LetterSvg className={styles.svgForContact} />
                            <p className={styles.description}>
                                contact@gmail.com
                            </p>
                        </MyLink>
                        <MyLink
                            className={`${styles.rowDirection} ${styles.linkForContact}`}
                        >
                            <PhoneSvg className={styles.svgForContact} />
                            <p className={styles.description}>04734 21766</p>
                        </MyLink>
                    </div>
                    <div>
                        <h1 className={styles.caption}>SOCIAL MEDIA</h1>
                        <p className={styles.descriptionForSocial}>
                            Temporibus autem quibusdam et aut debitis aut rerum
                            necessitatibus saepe.
                        </p>
                        <div className={styles.container}>
                            <div className={styles.wrapper}>
                                <MyLink
                                    className={`${styles.rowDirection} ${styles.linkStyles}`}
                                >
                                    <FacebookSvg
                                        className={styles.svgForSocial}
                                    />
                                    <p className={styles.linkForSocial}>
                                        Facebook
                                    </p>
                                </MyLink>
                                <MyLink
                                    className={`${styles.rowDirection} ${styles.linkStyles}`}
                                >
                                    <GooglePlusSvg
                                        className={styles.svgForSocial}
                                    />
                                    <p className={styles.linkForSocial}>
                                        Google+
                                    </p>
                                </MyLink>
                            </div>
                            <div className={styles.wrapper}>
                                <MyLink
                                    className={`${styles.rowDirection} ${styles.linkStyles}`}
                                >
                                    <TwitterSvg
                                        className={styles.svgForSocial}
                                    />
                                    <p className={styles.linkForSocial}>
                                        Twitter
                                    </p>
                                </MyLink>
                                <MyLink
                                    className={`${styles.rowDirection} ${styles.linkStyles}`}
                                >
                                    <PinterestSvg
                                        className={styles.svgForSocial}
                                    />
                                    <p className={styles.linkForSocial}>
                                        Pinterest
                                    </p>
                                </MyLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
