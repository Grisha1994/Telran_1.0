import { loadUsersAction, loadSingleUsersAction } from "../reducer/usersReducer";

export const fetchUsers = async (dispatch) => {
    const resp = await fetch('https://dummyjson.com/users');
    const data = await resp.json();
    const clearData = data.users.map(
        ({id, firstName, lastName}) => ({id, name: firstName, lastname: lastName}));
        
        dispatch(loadUsersAction(clearData))
        
        
}

export const fetchSingleUsers = (userId) => {
    return async (dispatch) => {
        const resp = await fetch(`https://dummyjson.com/users/${userId}`);
        const {id, firstName, lastName} = await resp.json();
        const clearData = {id, name: firstName, lastname: lastName}
            
            dispatch(loadSingleUsersAction(clearData))
        
    }    
}