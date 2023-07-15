import { loadProductAction } from "../reducer/productReducer";

export const fetchProduct = async (dispatch) => {
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();
    const clearData = data.products.map(
        ({id, title, description, price}) => ({id, title, description, price}));
        
        dispatch(loadProductAction(clearData))
        
        
}