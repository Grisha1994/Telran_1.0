export const add_to_card = (payload) => ({type: 'ADD_TO_CARD', payload});
export const minus = (payload) => ({type: 'MINUS', payload});
export const plus = (payload) => ({type: 'PLUS', payload});
export const remove = () => ({type: 'REMOVE'});
export const delete_card = (payload) => ({type: 'DELETE_CARD', payload});

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id);
    if(productInState){
        productInState.count++
        return[...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}
export const cardReducer = (state = [], action) => {
   if(action.type === 'ADD_TO_CARD'){
    return checkProduct(state, action.payload)

   } else if (action.type === 'PLUS'){
    state.find(({id}) => id === action.payload).count++
    return [...state]
   
   }else if (action.type === 'MINUS'){
    const target = state.find(({id}) => id === action.payload)
    if(target.count !== 1){
        target.count--;
    } else {
       return state.filter(({id}) => id !== action.payload)
    }
    return [...state]

   } else if(action.type === 'REMOVE'){
        return []

    } else if(action.type === 'DELETE_CARD'){
        return state.filter(({id}) => id !== action.payload)

   } else {
    return state
   }
    
    
}