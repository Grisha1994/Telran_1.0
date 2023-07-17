import React, { useContext } from 'react'
import { Context } from '../../context'
import Player from '../Player';

export default function PlayerContainer() {

    const {players} = useContext(Context);

  return (
    <div>
        
        {
            players.length === 0 
            ? <p>Пользователей играков</p> 
            : players.map(el => <Player key={el.id} {...el}/>) 
            
        }
    </div>
  )
}
