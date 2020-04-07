import React, { useState } from 'react';
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
        backgroundColor: 'yellow',
        height: '10vh',
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

    const [pomoTime, setPomoTime] = useState(25);

    let handleStart = () => {
        console.log(timer);
        if (!timer) {
            timer = setInterval(() => {
                setPomoTime((prevState) =>
                    prevState - 1,
                );
            }, 1000);
        }
    }

    let handlePause = () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    let handleReset = () => {
        console.log("heer");
        setPomoTime(25);
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
                    <PomoTimer pomoTime={pomoTime} />
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
