const LOAD_USERS = ' [USERS] LOAD_USERS';
const LOAD_SINGLE_USERS = ' [USERS] LOAD_SINGLE_USERS';

const initialState = [];

export const loadUsersAction = (payload) => ({type: LOAD_USERS, payload});
export const loadSingleUsersAction = (payload) => ({type: LOAD_SINGLE_USERS, payload});

export const usersReducer = (state = initialState, action) => {
    if (action.type === LOAD_USERS){
        return [...state,  ...action.payload]
    } else  if (action.type === LOAD_SINGLE_USERS){
        return [...state, action.payload]
    }
  
        return state
    }