import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog +' '+ s.active}><NavLink to='/dialogs/1'>Fedir</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>Evgen</NavLink> </div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Ira</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Kostia</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>Oleg</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/6'>Andrey</NavLink></div>
        </div>
            <div className={s.messages}>
                <div className={s.message}>how are you?</div>
                <div className={s.message}>I am fine</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;