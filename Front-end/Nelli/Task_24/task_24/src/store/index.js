import { combineReducers, createStore } from "redux";
import { productReducer } from "./reducer/productReducer";
import { wordsReducer } from "./reducer/wordsReducer";

const rootReducer = combineReducers({
    products: productReducer,
    words: wordsReducer
});

export const store = createStore(rootReducer);