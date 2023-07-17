import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slice/categorySlice'
import productsReducer from './slice/productsSlice';
import basketReducer from './slice/basketSlice';


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        products: productsReducer,
        basket: basketReducer
       
    }
});