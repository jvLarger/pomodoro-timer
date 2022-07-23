import { SetStateAction, useEffect, useRef, useState } from 'react';
import Timer from '../Timer';
import style from './styles.module.css';

function Pomodoro() {

    const [nrSegundosRestantes, setNrSegundosRestantes] = useState(20);
    const [isStarted, setIsStarted] = useState(false);
    const timerRef = useRef<number>();

    useEffect(() => {
        isStarted ? startTimer() : pauseTimer();
    }, [isStarted]);

    useEffect(() => {

        console.log(nrSegundosRestantes);

        if (nrSegundosRestantes == 0) {
            pauseTimer();
            setNrSegundosRestantes(20);
        }

    }, [nrSegundosRestantes]);

    function handleStart() {
        setIsStarted(!isStarted);
    }
    
    function showTimer() {
        setNrSegundosRestantes(oldCount => (oldCount - 1));
      }

    function startTimer() {
        timerRef.current = setInterval(showTimer, 1000);
    }
    
    function pauseTimer() {
        clearInterval(timerRef.current);
    }

    return (
        <>
            <button onClick={() => { handleStart() }} type='button'>{isStarted ? "Pause" : "Start"}</button>
            <Timer />
        </>
    );
}

export default Pomodoro;