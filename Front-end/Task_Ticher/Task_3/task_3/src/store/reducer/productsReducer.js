const PRODUCT = 'PRODUCT';

const  initialState = [];

export const fetchProductsAction = (payload) => ({type: PRODUCT, payload});

export const productsReducer = (state = initialState, action) => {
    if (action.type === PRODUCT){
        return [...state, ...action.payload]
    }
        return state
    }