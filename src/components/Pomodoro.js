import React, { useState } from 'react';

let log = console.log;
let timer;

export default function Pomodoro() {
    const[pomoTime, setPomoTime] = useState(25);

    let handleStart = () => {
        timer = setInterval(() => {
            setPomoTime((prevState)=>
                prevState-1,
            );
        }, 1000);
    }

    let handlePause = () => {
        clearInterval(timer);
    }

    let handleReset = () => {
        setPomoTime(25);
        clearInterval(timer);
    }

    return(
        <div>
            {pomoTime}
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}