export const wordsReducer = (state = [], action) => {
    if(action.type === 'ADD_WORD'){
        return [...state, action.payload]
    } else if (action.type === 'DELETE_CARD'){
        return state.filter(({id}) => id !== action.payload)
    } else if (action.type === 'CHANGE_LANG'){    
        return state.map(el => {
            if (el.id === action.payload){
                el.lang = el.lang === 'eng' ? 'rus' : 'eng'
            }
            return el
        })   
    } else {
    return state
    }
}

       // второй вариант
        // else if (action.type === 'CHANGE_LANG') {
        //     const target_card = state.find(el => el.id === action.payload);
        //     target_card.lang = target_card.lang === 'eng' ? 'rus' : 'eng';
        //     return [...state]