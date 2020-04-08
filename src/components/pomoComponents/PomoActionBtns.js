import React from 'react';

export default function PomoActionBtns(props) {
    return(
        <div style={{width:'50%'}}>
            <button  onClick={props.handleStart}>Start</button>
             <button onClick={props.handlePause}>Pause</button>
             <button onClick={props.handleReset}>Reset</button>
        </div>
    );
}