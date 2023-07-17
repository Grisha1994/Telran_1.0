import { loadCommentsAction } from '../store/reducer/commentsReducer'

export const commentsAction = (dispatch) => {
    fetch('https://dummyjson.com/comments')
    .then(resp => resp.json())
    .then(data => dispatch(loadCommentsAction(data.comments)))
}