import {createStore, combineReducers} from 'redux'
import { counterReducer } from './reducer/counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer
});

export const store = createStore(rootReducer);