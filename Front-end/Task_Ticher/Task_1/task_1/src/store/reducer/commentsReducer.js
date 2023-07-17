const LOSD_COMMENTS = '[COMMENTS] LOSD_COMMENTS'

export const loadCommentsAction = (payload) => ({type: LOSD_COMMENTS, payload})

export const commentsReducer = (state = [], action) => {
    if(action.type === LOSD_COMMENTS){
        return [...action.payload]
    }
    return state
}