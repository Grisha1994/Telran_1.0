import React, { useContext } from 'react'
import context from '../context';
import { addUser } from '../request/users_req';

export default function AddUserForm() {
    
const {createNewUser} = useContext(context);

    const onSubmit = (event) => {

        event.preventDefault();

        const {name, avatar, email} = event.target;

        const newUser = {
            name: name.value,
            email: email.value,
            avatar: avatar.value,
            role: 'customer',
            password: '1234' ,
            id: Date.now()         
        }
        addUser(newUser, createNewUser);
        event.target.reset();
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Имя' name='name'/>
            <input type="text" placeholder='Email' name='email'/>
            <input type="text" placeholder='Ссылка на аватар' name='avatar'/>
            <button type='submit'>добавить</button>
        </form>
    </div>
  )
}
