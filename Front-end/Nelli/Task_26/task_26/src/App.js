import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';
import NavMenu from './components/NavMenu';
import Foter from './components/Footer';

function App() {
  return (
    <div >
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/user_page' element={<UserPage/>}/>
      </Routes>
      <Foter/>
    </div>
  );
}

export default App;
