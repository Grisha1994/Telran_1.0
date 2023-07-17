const ADD = ' [EMPLOYEES] ADD';

const initialState = [
    {id: 1, name: 'Сергей', lastname: 'Иванов'},
    {id: 2, name: 'Олег', lastname: 'Фролов'},
    {id: 3, name: 'Ирина', lastname: 'Романова'},
    {id: 4, name: 'Иван', lastname: 'Грибов'},
];

export const addAction = (payload) => ({type: ADD, payload});

export const employeesReducer = (state = initialState, action) => {

if (action.type === ADD){
    return [...state, {id: Date.now(), ...action.payload}]
}
    return state
}