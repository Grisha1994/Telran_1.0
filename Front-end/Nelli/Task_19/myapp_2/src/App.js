import { useState } from 'react';
import Nav from './components/Nav';

function App() {

  const [menuActive, setMenuActive] = useState(false);
  const [colorRed, colorWith] = useState(false);


  return (
    <div>
      <Nav {...{menuActive, setMenuActive, colorRed, colorWith}}/>
    </div>
  );
}

export default App;
