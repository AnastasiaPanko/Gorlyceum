import React from 'react';
import ArrayLinks from '../ArrayLinks/ArrayLinks';
import HeaderSvg from '../SVG/HeaderSVG/HeaderSvg';
import styles from './Navbar.module.css';
const Navbar = (props: any) => {
    return (
        <div className={styles.navbar}>
            <ArrayLinks
                isLeft={true}
                links={['Наш ліцей', 'Учням', 'Дистанційне навчання']}
            ></ArrayLinks>
            <a href='#'>
                <HeaderSvg />
            </a>
            <ArrayLinks
                isLeft={false}
                links={['Події', 'Проекти', 'Електронний журнал']}
            ></ArrayLinks>
        </div>
    );
};

export default Navbar;
