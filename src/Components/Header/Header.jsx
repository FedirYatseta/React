import React from 'react';
import s from '../Header/Header.module.css';
import logo from '../../img/logo.png'; 

import { NavLink } from 'react-router-dom';

const Header = (props) => {
    debugger;
    return <header className={s.header}>
        <div className={s.blockLogin}> { props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}</div>
        </header>
}
export default Header;