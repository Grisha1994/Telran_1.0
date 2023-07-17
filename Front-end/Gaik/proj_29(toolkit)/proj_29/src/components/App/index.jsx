import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchCategory } from "../../store/slice/categorySlice";
import { fetchProducts } from "../../store/slice/productsSlice"; 

import { Route, Routes } from 'react-router-dom';
import BasketPage from "../../pages/BasketPage";
import CategoryPage from "../../pages/CategoryPage";
import NavMenu from "../NavMenu";
import ProductsPage from "../../pages/ProductsPage";


function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <NavMenu/>
      <Routes>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/' element={<CategoryPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:category' element={<ProductsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
