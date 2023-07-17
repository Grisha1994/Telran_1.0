

const  initialState = {
    list: [],
    status: 'Loading'
};

const FETCH_CATEGORY = '[CATEGORY] FETCH_CATEGORY';
const FETCH_CATEGORY_ERROR = '[CATEGORY] FETCH_CATEGORY_ERROR';

export const fetchALLCategoryAction = (payload) => ({type: FETCH_CATEGORY, payload});
export const fetchALLErrorCategoryAction = (payload) => ({type: FETCH_CATEGORY_ERROR, payload});

export const categoryReducer = (state = initialState, action) => {
    if (action.type === FETCH_CATEGORY){
        return {
            list: action.payload,
            status: 'ready'
        }
    } else if (action.type === FETCH_CATEGORY_ERROR){
        return {
            status: 'error'
        }
    }
        return state
    }