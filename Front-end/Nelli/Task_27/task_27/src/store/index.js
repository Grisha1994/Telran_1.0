import { combineReducers, createStore} from 'redux'
import { productsReducer } from "./reducer/productsReducer";
import { cardReducer } from './reducer/cardReducer';


const rootReducer = combineReducers({
    products: productsReducer,
    card: cardReducer
})

export const store = createStore(rootReducer);