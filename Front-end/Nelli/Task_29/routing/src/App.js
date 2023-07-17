import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductsPage';
import UserPage from './pages/UsersPage';
import NavMenu from './components/NavMenu';
import UserDescriptionPage from './pages/UserDescriptionPage';

function App() {
  return (
    <div>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/products_page' element={<ProductPage/>}/>
        <Route path='/users_page' element={<UserPage/>}/>
        <Route path='/user/:id' element={<UserDescriptionPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

