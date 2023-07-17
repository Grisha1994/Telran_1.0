import { fetchALLCategoryAction, fetchALLErrorCategoryAction } from '../reducer/categoryReducer'

export const fetchCategory = async (dispatch) => {
  try{
    const resp = await fetch('https://fakestoreapi.com/products/categories');
    const data = await resp.json();
    dispatch(fetchALLCategoryAction(data))
  }catch{
    dispatch(fetchALLErrorCategoryAction())
  }
           
}