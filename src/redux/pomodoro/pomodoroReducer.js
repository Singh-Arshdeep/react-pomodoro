import {START_POMO} from './pomodoroTypes';

const initialState = {
    pomoTime: 25,
    longBreakTime:15,
    shortBreakTime:5,
}

let pomoReducer = (state=initialState, action) => {
    switch(action.type) {
        case START_POMO: return{
            ...state
        }
    }
}

export default pomoReducer;