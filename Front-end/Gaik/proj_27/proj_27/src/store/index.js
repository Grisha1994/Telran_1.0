import {combineReducers, createStore} from 'redux'
import {employeesReducer} from './reducer/employeesReducer'
import {tasksReducer} from './reducer/tasksReducer'


const rootReducer = combineReducers({
    employees : employeesReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer);