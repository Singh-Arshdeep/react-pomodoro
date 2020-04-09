import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './pomoTimer.css';

const useStyles = makeStyles((theme) => ({
    container: {
        height:'100%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
    },
    clock: {
        height:'100%',
        width:'50%',
        textAlign:'center',
    }
}));

export default function PomoTimer(props) {
    const classes = useStyles();
    
    return(
        <div className={classes.container}>
            <div className={classes.clock}>
                <div id="countdown">
                <div id='tiles'>
                <span>{props.pomoTimeMin}</span>
                <span>{props.pomoTimeSec}</span>
                </div>
                <div className="labels">
                    <li>Mins</li>
                    <li>Secs</li>
                </div>
                </div>
            </div>
        </div>
    );
}