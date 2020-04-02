import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        backgroundColor:'wheat'
    }
}));

export default function PomoTimer(props) {
    const classes = useStyles();
    
    return(
        <div className={classes.container}>
            <div className={classes.clock}>
                <span>{props.pomoTime}</span>
            </div>
        </div>
    );
}