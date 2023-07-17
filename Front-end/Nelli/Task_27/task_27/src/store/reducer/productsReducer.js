const ADD_PRODUCT = 'ADD_PRODUCT'

export const  add_ProductAction = (payload) => ({type:ADD_PRODUCT, payload});
export const  delete_product = (payload) => ({type: 'DELETE_PRODUCT', payload});

export const productsReducer = (state = [], action) => {
    if( action.type === ADD_PRODUCT){
        return [...state, {id: Date.now(), ...action.payload}]
    } else if(action.type === 'DELETE_PRODUCT'){
            return state.filter(({id}) => id !== action.payload)
    } else {
    return state
    }
}