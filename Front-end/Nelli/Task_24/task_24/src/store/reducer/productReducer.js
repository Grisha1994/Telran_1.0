const defaultState = [];

const ADD_PRODUCT = 'ADD_PRODUCT';

export const AddProductAction = payload => ({type: ADD_PRODUCT, payload});

export const productReducer = (state = defaultState, action) => {
    if(action.type === ADD_PRODUCT){
        return [...state, action.payload]
    } else {
        return state
    }
    
}