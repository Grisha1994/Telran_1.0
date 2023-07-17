const ADD = ' [TASKS] ADD';

    const initialState = [
        {id: 1, casename: 'Task #1234', employee: 2, price: 435, done: false},
        {id: 2, casename: 'Task #8765', employee: 1, price: 26, done: false},
        {id: 3, casename: 'Task #2625', employee: 3, price: 65, done: true},
        {id: 4, casename: 'Task #7267', employee: 2, price: 287, done: false},
        {id: 5, casename: 'Task #3773', employee: 1, price: 463, done: false}
    ];
    


export const addAction = (payload) => ({type: ADD, payload});

export const tasksReducer = (state = initialState, action) => {
    if (action.type === ADD){
        return [...state, {id: Date.now(), done: false, ...action.payload}]
    }
        return state
}