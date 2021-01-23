import React from 'react';
import s from '../Header/Header.module.css';
import logo from '../../img/logo.png'; 

const Header = () => {

    return <header className={s.header}>
        <img src={logo} alt="Logo" />
        </header>
}
export default Header;