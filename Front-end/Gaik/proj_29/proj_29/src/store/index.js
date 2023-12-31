import {applyMiddleware, combineReducers, createStore} from 'redux'
import { categoryReducer } from './reducer/categoryReducer'
import thunk from 'redux-thunk'
import {productsReducer} from './reducer/productsReducer'
import { basketReducer } from './reducer/basketReducer'

const rootReducer = combineReducers({
    
    category: categoryReducer,
    products: productsReducer,
    basket: basketReducer
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk));