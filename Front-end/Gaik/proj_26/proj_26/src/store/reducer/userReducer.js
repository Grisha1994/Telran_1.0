const ADD = ' [USERS] ADD';
const MINUS = ' [USERS] MINUS';
const PLUS = '[USERS] PLUS';
const REMOVE = '[USERS] REMOVE';
const ZERO = '[USERS] ZERO';

const initialState = [
    {id: 1, name: 'Степан', lastname: 'Иванов', age: 2, gender: 'm'},
    {id: 2, name: 'Ирина', lastname: 'Семенова', age: 29, gender: 'f'},
    {id: 3, name: 'Сергей', lastname: 'Петров', age: 34, gender: 'm'}
];


export const addAction = (payload) => ({type: ADD, payload});
export const minusAction = (payload) => ({type: MINUS, payload});
export const plusAction = (payload) => ({type: PLUS, payload});
export const removeAction = (payload) => ({type: REMOVE, payload});
export const zeroAction = (payload) => ({type: ZERO, payload});

export const userReducer = (state = initialState, action) => {
    if(action.type === REMOVE){
        return state.filter(({id}) => id !== action.payload)
    } else if  (action.type === PLUS){
        state.find(({id}) => id === action.payload).age++
        return [...state]
    } else if  (action.type === MINUS){
        const target = state.find(({id}) => id === action.payload);
        if(target.age !== 0) {
            target.age--;
        }
        return [...state]
        
    } else if (action.type === ADD){
        return [...state, {id: Date.now(), ...action.payload}]

    } else if  (action.type === ZERO){
        state.find(({id}) => id === action.payload).age = 0;
        return [...state]
    }
    return state

}


