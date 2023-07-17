import defaultVariable, { var_1, var_2, var_3} from "./Test";
import func, {arr_1, arr_2, arr_3} from "./Data";
import arr, {string_1, string_2, string_3, string_4} from "./Tmp";

import User from './User';
import Product from './Product';

function App() {
  console.log(var_1, var_2, var_3);
  console.log(defaultVariable);
  console.log(func(arr_1));
  console.log(func(arr_2));
  console.log(func(arr_3));
  console.log(string_1);
  console.log(string_2);
  console.log(string_3);
  console.log(string_4);
  console.log(arr.reduce((acc, item) => acc + item, 0));
  return (
    <div>
      <User name={'Grisha'} lastName={'lex'} age={28}/>
      <User name={'Vova'} lastName={'Voiadger'} age={38}/>
      <Product title={'Aser'} price={3000} count={3}/>
    </div>
  );
}

export default App;
