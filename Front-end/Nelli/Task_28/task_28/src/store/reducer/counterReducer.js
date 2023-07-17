const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const REMOVE = 'REMOVE';
const PLUS = 'PLUS';

export const incrementAction = () => ({type: INCREMENT})
export const decrementAction = () => ({type: DECREMENT})
export const removeAction = () => ({type: REMOVE})
export const plusAction = payload => ({type: PLUS, payload})

export const counterReducer = (state = 0, action) => {
    if (action.type === INCREMENT){
        return state + 1
    } else  if (action.type === DECREMENT){
        return state - 1
    }else  if (action.type === REMOVE){
        return 0
    }else  if (action.type === PLUS){
        return state + action.payload
    }
    return state
}