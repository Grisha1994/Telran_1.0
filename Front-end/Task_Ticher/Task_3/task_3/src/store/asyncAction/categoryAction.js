import {fetchAction } from '../reducer/categoryReducer'
import {showLoader, hideLoader} from '../reducer/loaderReducer'

export const fetchCategory = async (dispatch) => {
    
    dispatch(showLoader());

    const resp = await fetch('https://fakestoreapi.com/products/categories');
    const data = await resp.json();
    dispatch(fetchAction(data))

    dispatch(hideLoader());
           
}