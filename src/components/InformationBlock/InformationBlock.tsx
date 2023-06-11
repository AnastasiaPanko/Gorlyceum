import React from 'react';
import styles from '../InformationBlock/InformationBlock.module.css';

interface Props {
    src: string;
    captionText: string;
    descriptionText: string;
    isLeft: boolean;
}

const InformationBlock = ({
    src,
    captionText,
    descriptionText,
    isLeft,
}: Props) => {
    const className = `${isLeft ? styles.marginToRight : styles.marginToLeft}`;
    return (
        <div className={className}>
            <div className={styles.flexBlock}>
                <img className={styles.image} src={src}></img>
                <div className={styles.textBlock}>
                    <h1 className={styles.caption}>{captionText}</h1>
                    <p className={styles.description}>{descriptionText}</p>
                </div>
            </div>
        </div>
    );
};

export default InformationBlock;
