import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialog = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/ + props.id'}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name='Fedir' id='1' />
                <Dialog name='Evgen' id='2' />
                <Dialog name='Ira' id='3' />
                <Dialog name='Kostia' id='4' />
                <Dialog name='Oleg' id='5' />
                <Dialog name='Andrey' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='how are you?' />
                <Message message='I am fine.' />
                <Message message='Yo' />

            </div>
        </div>
    )
}

export default Dialogs;