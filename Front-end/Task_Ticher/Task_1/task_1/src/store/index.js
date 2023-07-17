import {applyMiddleware, combineReducers, createStore} from 'redux'
import {commentsReducer} from './reducer/commentsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    
  comments: commentsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));