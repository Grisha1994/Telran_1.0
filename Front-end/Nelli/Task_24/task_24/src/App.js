import AddProductForm from './components/AddProductForm';
import ProductContainer from './components/ProductContainer';
import './App.css';
import AddWordForm from './components/AddWordForm/AddWordForm';
import WordsContainer from './components/WordsContainer/WordsContainer';

function App() {
  return (
    <div>
      <AddProductForm/>
      <ProductContainer/>
      <br></br>
      <br></br>
      <AddWordForm/>
      <WordsContainer/>
    </div>
  );
}

export default App;
