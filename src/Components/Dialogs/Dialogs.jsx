import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialog = (props) => {
    return <div className={s.dialog }>
        <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
    </div>
} 

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}
let DialogData= [
    {name:'Fedir', id:'1'},
    {name:'Evgen', id:'2'}
]

let MessageData= [
    {message: 'how are you?'},
    {message: 'I am fine'}
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name={DialogData[0].name}  id={ DialogData[0].id} />
                <Dialog name={DialogData[1].name}  id={DialogData[1].id} />
               
            </div>
            <div className={s.messages}>
                <Message message={MessageData[0].message} />
                <Message message={MessageData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;