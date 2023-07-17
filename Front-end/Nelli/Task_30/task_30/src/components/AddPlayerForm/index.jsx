import React, { useContext } from 'react'
import s from './style.module.css'
import Select from 'react-select'
import { Context } from '../../context';

export default function AddPlayerForm() {

    const {teams, add_player } = useContext(Context);

    const onSubmit = e => {
        e.preventDefault();
        const { player, team } = e.target;
        const player_obj = {
          id: Date.now(),
          player: player.value,
          team: team.value
        }
        add_player(player_obj);
        e.target.reset()
      }

  return (
    <form onSubmit={onSubmit} className={s.add_player_form}>
        <label>
            <p>Add player:</p>
            <input type="text" placeholder="Player's name" name='player'/>
        </label>
        <Select options={teams} name='team'/>
        <button>Add player</button>
    </form>
  )
}
