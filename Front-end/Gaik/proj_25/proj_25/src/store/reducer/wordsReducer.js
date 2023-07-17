const initialState = [
    {id: 1, title:'стол'},
    {id: 1, title:'стул'}
]

export const wordsReducer = (state = initialState, action) => {
    if(action.type === 'ADD'){
        return [...state, {
            id: Date.now(),
            title: action.payload
        }]
    }else if(action.type === 'REMOVE'){
        return state.filter(({id}) => id !== action.payload)
    }
    return state
}

