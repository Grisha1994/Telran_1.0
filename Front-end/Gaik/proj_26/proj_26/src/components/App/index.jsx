import UsersList from "../UsersList/UsersList";
import '../App/style.css'
import AddUser from "../AddUser/AddUser";
import UsersCalculation from "../UsersCalculation";
import ProductsList from "../ProductsList";


function App() {
  return (
    <div>
      <AddUser/>
      <UsersList/>
      <UsersCalculation/>
      <ProductsList/>
    </div>
  );
}

export default App;
