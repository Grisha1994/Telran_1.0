import {applyMiddleware, combineReducers, createStore} from 'redux'
import { categoryReducer } from './reducer/categoryReducer'
import thunk from 'redux-thunk'
import { loaderReducer } from './reducer/loaderReducer';
import { productsReducer } from './reducer/productsReducer';


const rootReducer = combineReducers({
    
    category: categoryReducer,
    loader: loaderReducer,
    product: productsReducer
  
})

export const store = createStore(rootReducer, applyMiddleware(thunk));