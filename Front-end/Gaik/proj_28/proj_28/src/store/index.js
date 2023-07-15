import {applyMiddleware, combineReducers, createStore} from 'redux'
import { usersReducer } from './reducer/usersReducer';
import thunk from 'redux-thunk'
import { productReducer } from './reducer/productReducer';


const rootReducer = combineReducers({
    
    users: usersReducer,
    products: productReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));