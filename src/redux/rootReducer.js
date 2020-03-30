import {combineReducers} from 'redux';
import pomoReducer from './pomodoro/pomodoroReducer';

const rootReducer = combineReducers({
    pomo: pomoReducer,
});

export default rootReducer;