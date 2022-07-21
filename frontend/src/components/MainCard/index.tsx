import { useEffect, useState } from 'react';
import Header from '../Header';
import LongBreak from '../LongBreak';
import Pomodoro from '../Pomodoro';
import ShortBreak from '../ShortBreak';
import style from './styles.module.css';

function MainCard() {

    const [idTabActive, setIdTabActive] = useState('pomodoro');

    return (
        <div className={style.mainCard}>
            <Header />
            <div className={style.containerTimers}>
                <div>
                    <div>
                        <button className={style.buttonTab} type='button' onClick={() => setIdTabActive('pomodoro')}>Pomodoro</button>
                        <button className={style.buttonTab} type='button' onClick={() => setIdTabActive('short-break')}>Short Break</button>
                        <button className={style.buttonTab} type='button' onClick={() => setIdTabActive('long-break')}>Long Break</button>
                    </div>
                    <div>
                        {idTabActive == "pomodoro" ? <Pomodoro /> : ""}
                        {idTabActive == "short-break" ? <ShortBreak /> : ""}
                        {idTabActive == "long-break" ? <LongBreak /> : ""}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MainCard;