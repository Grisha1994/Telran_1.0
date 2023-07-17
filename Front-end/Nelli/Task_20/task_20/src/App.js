import './App.css';
import { useEffect, useState } from 'react'
import { words } from '../src/data/words.js'
import CardsContainer from './components/CardsContainer/CardsContainer';
import Trigger from './components/Trigger/Trigger';
import AddCardForm from './components/AddCardForm/AddCardForm';
import context from '../src/context'

function App() {

  const [cards, setCards] = useState(words);

  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('cards')) || cards)
  }, []) // считываем данные из localstorage один раз при перезагрузке контента

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]); // кладем в localstorage обновленное состояние cards при каждом его изменение

  const change_to_eng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng'
      return el
    }))
  }

  const change_to_rus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus'
      return el
    }))
  }

  const addCard = (word) => {
    const newState = [...cards, word];
    setCards(newState)
  }

  const deleteCard = id => setCards(cards.filter(el => el.id !== id))
  
  // const deleteCard = (deleteId) => setCards(cards.filter(({id}) => id !== deleteId));

  const change_to_card = (id) => {
    setCards(cards.map(el => {
      if(el.id === id){
        el.lang = el.lang === 'eng' ? 'rus' : 'eng'
      }
      return el
    }))
    // setCards(newStateCard);
  }


  return (
    <div>
      <context.Provider value={{addCard, cards, deleteCard, change_to_card, change_to_eng, change_to_rus}}>
      <AddCardForm />
      <CardsContainer/>
      <Trigger/>
      </context.Provider>
    </div>
  )
}

export default App
