import './App.css';
import CardContainer from './CardContainer';
import AddProductForm from './components/AddProductForm';
import ProductsContainer from './components/ProductsContainer';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/pages/ProductsPage';
import CardPage from './components/pages/CardPage';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
        <Route path='/product_page' element={<ProductPage/>}/>
        <Route path='/card_page' element={<CardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
