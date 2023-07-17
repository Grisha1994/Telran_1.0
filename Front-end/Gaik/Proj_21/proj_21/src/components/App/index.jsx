import AddProduct from "../AddProduct/AddProduct";
import Product from "../Product/Product";
import { useState } from 'react'

function App() {

    const products = [
        {id: 1, title: 'велосипед', price: 3500, count: 12},
        {id: 2, title: 'ролики', price: 500, count: 15},
        {id: 3, title: 'самокат', price: 700, count: 0},
        {id: 4, title: 'лыжи', price: 2200, count: 8},
      ]
      
      const [List, setTodoList] = useState(products);

      const deleteStatus = (deleteId) => setTodoList(List.filter(({id}) => id !== deleteId));

    
      const plus = (id) => {
       const newArr = List.map((el) => {
            if (el.id === id){
                el.count++
            }
            return el
        })
        setTodoList(newArr)
      }

      const minus = (id) => {
        const newArr = List.map((el) => {
             if (el.id === id && el.count !== 0){
                el.count--
             }
             return el
         })
         setTodoList(newArr)
       }
        
       const reset = (id) => {
        const newArr = List.map((el) => {
             if (el.id === id){
                el.count = 0
             }
             return el
         })
         setTodoList(newArr)
       }

       const plus1000 = (id) => {
        const newArr = List.map((el) => {
             if (el.id === id){
              el.price += 1000
             }
             return el
         })
         setTodoList(newArr)
       }
    // в компоненте App сформировать параграфы с описанием продуктов
    /* 
    <p>велосипед (3500)</p>
    <p>велосипед (3500)</p>
    <p>велосипед (3500)</p> 

    1) добавить у каждой карточки кнопку увеличения цены на 1000

    */
    const addProduct = (product) => {
      const newState = [...products, product];
      setTodoList(newState)
    }

    return (

    <div>

      <AddProduct addProduct={addProduct}/>

        <div className="App">
          {
          List.length === 0 ? <p>товар отсстуетут</p> : List.map(el => <Product {...el} key={el.id} {...{deleteStatus, plus, minus, reset, plus1000}}/>)
          }
        </div>

      </div>
    );
  }
  
  export default App;