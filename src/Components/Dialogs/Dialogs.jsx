import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog +' '+ s.active}>Fedir</div>
                <div className={s.dialog}>Evgen</div>
                <div className={s.dialog}>Ira</div>
                <div className={s.dialog}>Kostia</div>
                <div className={s.dialog}>Oleg</div>
                <div className={s.dialog}>Andrey</div>
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