import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function PomoActionBtns(props) {
    return(
        <div style={{width:'50%', margin:'auto', padding:15, }}>
            <Button variant="contained" color="primary" onClick={props.handleStart}>
                Start
            </Button>
            <Button variant="contained" color="secondary" onClick={props.handlePause}>
                Pause
            </Button>
            <Button variant="contained" onClick={props.handleReset}>
                Reset
            </Button>
        </div>
    );
}