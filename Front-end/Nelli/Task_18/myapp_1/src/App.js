import { useState } from "react";
import WinesContainer from "./WinesContainer/WinesContainer";
import {wine} from "./data/wine"

function App() {

  const [cards, setCards] = useState(wine);

  const delete_card = id => setCards(cards.filter(el => el.id !== id));

  return (
    <div>
      < WinesContainer cards={cards} delete_card={delete_card}/>
    </div>
  );
}

export default App;
