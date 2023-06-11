import React from 'react';
import MyLink from '../link/MyLink';
import styles from './ArrayLinks.module.css';

const ArrayLinks = (props: any) => {
    const links = [];
    const className = `${styles.myLink} ${
        props.isLeft ? styles.myLinkLeft : styles.myLinkRight
    }`;
    return (
        <div className={styles.arrayLinks}>
            {props.links.map((link: any) => {
                return (
                    <MyLink isLeft={props.isLeft} className={className}>
                        {link}
                    </MyLink>
                );
            })}
        </div>
    );
};

export default ArrayLinks;
