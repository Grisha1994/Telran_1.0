import {createStore} from 'redux'
import { wordsReducer } from './reducer/wordsReducer';

export const store = createStore(wordsReducer);

