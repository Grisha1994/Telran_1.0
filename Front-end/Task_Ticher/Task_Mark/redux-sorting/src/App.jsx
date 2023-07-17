import { Provider } from "react-redux";

import { store } from "./store";
import {products} from "./products.json"

import {ProductGrid} from './Product'



export function App() {
  const [priceTo, setPriceTo] = useState();

  const filteredProducts = priceTo == null ? products :
  products.filter(({price}) => price <= price);

  return <Provider store={store}> 
    <label>
      Price to:
      <input
        onChange={(el) => setPriceTo(Number(el.target.value))}
        value={price}
        />
    </label>
    <ProductGrid products={filteredProducts}/>
  </Provider>;
}
