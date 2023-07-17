import { useDispatch, useSelector } from "react-redux";
import MainPage from "../pages/MainPage";
import { useEffect } from "react";
import { fetchCategory } from "../../store/asyncAction/categoryAction";
import Loader from "../Loader";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";



function App() {

  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.loader.isLoading);

  useEffect(() => {
    dispatch(fetchCategory)
  }, [dispatch])

  return (
    <div>      
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/products/:category' element={<ProductsPage/>}/>
      </Routes>
      { isLoading ? <Loader/> : null}
    </div>
  );
}

export default App;
