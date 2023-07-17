const read = () => {
   return JSON.parse(localStorage.getItem('basket')) ?? []
};

const write = (data) => {
    localStorage.setItem('basket', JSON.stringify(data))
};

const  initialState = read();

const BASKET_ID = '[BASKET] BASKET_ID';
const MINUS = ' [BASKET] MINUS';
const PLUS = '[BASKET] PLUS';
const RESULT = '[BASKET] RESULT';
const DELETE = '[BASKET] DELETE';


export const basketAction = (payload) => ({type: BASKET_ID, payload});
export const minusAction = (payload) => ({type: MINUS, payload});
export const plusAction = (payload) => ({type: PLUS, payload});
export const resultAction = () => ({type: RESULT});
export const deleteAction = (payload) => ({type: DELETE, payload});

export const basketReducer = (state = initialState, action) => {
    if (action.type === BASKET_ID){
        const target = state.find(({id}) => id === action.payload);
        let newState;
        if(!target) {
            newState = [...state, {id: action.payload,  count: 1}]
        }else{
            target.count++
            newState = [...state];
        }
        write(newState)
        return newState
    } else if  (action.type === PLUS){
        state.find(({id}) => id === action.payload).count++
        write(state)
        return [...state]
    } else if  (action.type === MINUS){
        const target = state.find(({id}) => id === action.payload);
            target.count--;
        const newState = target.count === 0
           ? state.filter(({id}) => id !== action.payload)
           : [...state]
        write(newState)
        return newState
    
    } else if  (action.type === RESULT){
        write([])
        return []
    } else if (action.type === DELETE){
        const newState = state.filter(({id}) => id !== action.payload);
        write(newState)
        return newState
    }
    return state

}