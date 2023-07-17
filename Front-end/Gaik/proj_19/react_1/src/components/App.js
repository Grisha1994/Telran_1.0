import Product from "./Product/Product";
import User from "./User/User";
import Test from "../Test";
import WordsContainer from "./WordsContainer/WordsContainer";


function App() {

  const products = [
    {id: 1, title: 'велосипед', price: 3500, desc: 'полезно для здоровья'},
    {id: 2, title: 'ролики', price: 500, desc: 'весело'},
    {id: 3, title: 'самокат', price: 1200, desc: 'удобно для города'},
    {id: 4, title: 'лыжи', price: 2200, desc: 'полезно для спины'},
    {id: 5, title: 'сноуборд', price: 2100, desc: 'модно-молодежно'},
  ]

  const users = [
    {id: 1, name: 'Надя', lastName: 'Калугина', position: 'Секретарь'},
    {id: 2, name: 'Вася', lastName: 'Жук', position: 'Менеджер'},
    {id: 3, name: 'Маша', lastName: 'Куба', position: 'Секретарь'},
    {id: 4, name: 'Миша', lastName: 'Протько', position: 'Продавец'},
    {id: 5, name: 'Саша', lastName: 'Шугай', position: 'Рекрутер'},
  ]

  // вывести для каждого объекта компонент Product с данными

  return (
    <div>
      <div>
      {
        // products.map(el => <Product title={el.title} price={el.price} desc={el.desc} key={el.id}/>)
        products.map(el => <Product {...el} key={el.id}/>)
      }
      </div>
      <div>
        {
          users.map(el => <User {...el} key={el.id}/>)
        }
      </div>
      <div>
        <Test/>
      </div>
      <div>
        <p>Слова</p>
        <WordsContainer/>
      </div>
    </div>
  );
}

export default App;
