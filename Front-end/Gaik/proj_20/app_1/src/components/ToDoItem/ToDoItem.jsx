// 1) реализовать получение props (title, status (0/1), priority (0/1))
// 2) полученные пропсы вывести в параграфы
/* <div>
    <p>title</p>
    <p>status</p>
    <p>priority</p>
</div> */
// 3) в ToDoContainer передать пропсы в ToDoItem
// зеленый #27ae60
// красный #e67e22


import React from 'react'
import s from "./style.module.css"

export default function ToDoItem({title, status, priority, changeStatus, id, deleteStatus}) {
  const style = {backgroundColor: priority === 0 ? '#27ae60':'#e67e22',
                 textDecoration: status === 1 ? 'line-through' : 'none',
                 color: status === 1 ? 'slategrey' : ''};
  return (
    <div style={style} className={s.item}>
        <p>title: {title}</p>
        <input type="checkbox" checked={!!status} onChange={()=>changeStatus(id)} />
        <button onClick={() => deleteStatus(id)} >Delete</button>
        {/* <p>status: {status}</p>
        <p>priority: {priority}</p> */}
    </div>
  )
}
