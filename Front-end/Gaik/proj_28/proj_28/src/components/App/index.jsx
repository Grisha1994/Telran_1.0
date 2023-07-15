import { useEffect } from "react";
import UsersList from "../UsersList";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../store/asyncActions/productAction";
import LoadUser from "../LoadUser"
import ProductList from "../ProductsList";

function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchProduct)
  }, [dispatch]);

  return (
    <div>
      <LoadUser/>
      <UsersList/>
      <ProductList/>
    </div>
  );
}

export default App;
