const CATEGORY = 'CATEGORY';

const  initialState = [];

export const fetchAction = (payload) => ({type: CATEGORY, payload});

export const categoryReducer = (state = initialState, action) => {
    if (action.type === CATEGORY){
        return [...state, ...action.payload]
    }
        return state
    }