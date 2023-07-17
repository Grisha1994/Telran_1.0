import React, { useContext } from 'react'
import s from './style.module.css'
import { Context } from '../../context';


    export default function AddTeamForm() {

        const {add_team} = useContext(Context);

        const onSubmit = e =>{
        e.preventDefault();
    
        // Option_1
        // let data = new FormData(e.target)
        // let obj = Object.fromEntries(data)
        // const { value } = obj;
        // const team_obj = {...obj, label: value}
        // console.log(team_obj);
    
        // Option_2
        const {teamValue} = e.target;
        const team = {
          label: teamValue.value,
          value: teamValue.value
        }
        add_team(team);
        e.target.reset()
      }

  return (
    <form onSubmit={onSubmit} className={s.add_team_form}>
        <label>
            <p>Add team:</p>
            <input type="text" placeholder="Team's name" name='teamValue'/>
        </label>
        <button>Add team</button>
    </form>
  )
}
