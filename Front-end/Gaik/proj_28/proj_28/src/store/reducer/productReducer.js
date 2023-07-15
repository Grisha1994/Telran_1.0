const LOAD_PRODUCT = ' [USERS] LOAD_PRODUCT';




export const loadProductAction = (payload) => ({type: LOAD_PRODUCT, payload});


export const productReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCT){
        return [...state,  ...action.payload]
    }
        return state
    }