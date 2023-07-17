const REMOVE = '[PRODUCTS] REMOVE';
const REMOVE_DISCOUNT = '[PRODUCTS] REMOVE_DISCOUNT';

const initialState = [
        {id: 1, title: 'велосипед', price: 4300, discount: 5, marks: [5, 4, 4, 5, 4, 5]},
        {id: 2, title: 'ролики', price: 400, discount: 10, marks: [2, 3, 2]},
        {id: 3, title: 'самокат', price: 500, discount: 7, marks: [4, 4, 3, 4, 5]},
        {id: 4, title: 'лыжи', price: 2300, marks: [3, 3, 4, 3, 2]},
        {id: 5, title: 'коньки', price: 720, discount: 12, marks: [3, 4, 4, 4, 4]},
        {id: 6, title: 'сноуборд', price: 1200, marks: []}
];

export const removeAction = (payload) => ({type: REMOVE, payload});
export const remove_discountAction = (payload) => ({type: REMOVE_DISCOUNT, payload});

export const productReducer = (state = initialState, action) =>{
    if(action.type === REMOVE){
        return state.filter(({id}) => id !== action.payload)
    } else if(action.type === REMOVE_DISCOUNT){
        // state.find(({id}) => id === action.payload).discount = undefined ;
        // return [...state]

        return state.map(({discount, ...item}) => item.id === action.payload ? item : {discount, ...item});
    }
    return state
}