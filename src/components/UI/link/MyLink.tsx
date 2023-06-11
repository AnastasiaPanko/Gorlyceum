import React from 'react';
import styles from './MyLink.module.css';

const MyLink = ({ children, ...props }: any) => {
    return (
        <a href='#' {...props}>
            {children}
        </a>
    );
};

export default MyLink;
