import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PomoTimer from './pomoComponents/PomoTimer';
import PomoActionBtns from './pomoComponents/PomoActionBtns';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        backgroundColor: 'red',
        height: '10vh',
    },
    timer: {
        height: '50vh',
    },
    actionBtns: {
        height: '10vh',
        width: '50%',
        margin: 'auto',
    },
    infoSection: {
        backgroundColor: 'pink',
        height: '30vh',
    }
}));

let log = console.log;
let timer;

export default function Pomodoro() {
    const classes = useStyles();

    const [pomoTimeMin, setPomoTimeMin] = useState(25);
    const [pomoTimeSec, setPomoTimeSec] = useState(0);

    let handleStart = () => {
        setPomoTimeSec(60);
        if (!timer) {
            timer = setInterval(() => {
                setPomoTimeSec((prevState) =>
                    prevState - 1,
                );

            }, 1000);
        }
    }

    useEffect(() => {
        console.log(pomoTimeSec);
        if (pomoTimeSec == 0) {
            setPomoTimeSec(60);
            setPomoTimeMin((prevState) => {
                return prevState - 1
            });
        }
    }, [pomoTimeSec]);

    let handlePause = () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    let handleReset = () => {
        setPomoTimeMin(25);
        setPomoTimeSec(0);
        clearInterval(timer);
        timer = null;
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.nav}>
                    <div>Nav</div>
                </Grid>
                <Grid item xs={12} className={classes.timer}>
                    <PomoTimer pomoTimeMin={pomoTimeMin} pomoTimeSec={pomoTimeSec} />
                </Grid>
                <Grid item xs={12} className={classes.actionBtns}>
                    <PomoActionBtns handleStart={handleStart}
                        handlePause={handlePause}
                        handleReset={handleReset} />
                </Grid>
                <Grid item xs={12} className={classes.infoSection}>
                    <div>Info</div>
                </Grid>
            </Grid>
        </div>
    );
}
