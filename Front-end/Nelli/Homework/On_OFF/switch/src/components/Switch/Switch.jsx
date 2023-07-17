import React from 'react'
import s from "./style.module.css"

export default function Switch({id, title, completed, changeComplited, status}) {
        const style = {backgroundColor: completed === true ? '#27ae60':'#e67e22',
                       color: completed === false ? 'slategrey' : ''};

  return (
    <div style={style} className={s.item}>
    <p>{title}</p>
    <p>{status}</p>
    <input className={s.input} type="checkbox" checked={!!completed} onChange={()=>changeComplited(id)} />
    
    <label class="checkbox style-e">
        <input type="checkbox"/>
        <div class="checkbox__checkmark"></div>
        <div class="checkbox__body">Style E</div>
    </label>
    {/* <p>status: {status}</p>
    <p>priority: {priority}</p> */}
</div>
  )
}
