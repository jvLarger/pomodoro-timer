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
                    <div className={style.center}>
                        
                        <button
                            className={style.buttonTab + (idTabActive == "pomodoro" ? " " + style.activeButton : "")}
                            type='button'
                            onClick={() => setIdTabActive('pomodoro')}>
                            Pomodoro
                        </button>

                        <button
                            className={style.buttonTab + (idTabActive == "short-break" ? " " + style.activeButton : "")}
                            type='button'
                            onClick={() => setIdTabActive('short-break')}>
                            Short Break
                        </button>

                        <button
                            className={style.buttonTab + (idTabActive == "long-break" ? " " + style.activeButton : "")}
                            type='button'
                            onClick={() => setIdTabActive('long-break')}>
                            Long Break
                        </button>

                    </div>
                  
                    <div className={style.containerTimer}>
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