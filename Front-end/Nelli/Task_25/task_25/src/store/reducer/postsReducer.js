import { posts_data } from "../../data/posts";

export const postsReducer = (state = posts_data, action) => {
    if(action.type === "CHANGE_LIKE"){
        const target_post = state.find(el => el.id === action.payload);
        target_post.like = !target_post.like
        return [...state]

    } else if(action.type === 'ADD_POST'){
        return [...state, { id: Date.now(), ...action.payload}]

    }   else if (action.type === 'DELETE_POST'){
            return state.filter(({id}) => id !== action.payload)

    }   else if (action.type === 'DELETE_COMMENT'){
        const target_post = state.find(el => el.id === action.payload.post_id);
        target_post.comments = target_post.comments.filter(({id}) => id !== action.payload.comment_id);
            return [...state]

    } else if(action.type === 'ADD_COMMENT'){
        const target_post = state.find(el => el.id === action.payload.post_id);
        target_post.comments.push({ id: Date.now(), comment: action.payload.comment});
        return [...state]

    } else {
    return state
    }
}