import React, { useState, useEffect} from 'react'
import './App.css';
import { getUsers } from './request/users_req';
import context from './context';
import UserContainer from './UserContainer/UserContainer';
import AddUserForm from './AddUserForm/AddUserForm';


function App() {

const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
}, []);

console.log(users);

// const createNewUser = (card) => {
//   const state = [...users, card];
//   setUsers(state)
// }

const createNewUser = user => setUsers(state => [...state, user]);


  return (
    <div>
      <context.Provider value={{users, createNewUser}}>
        <AddUserForm/>
        <UserContainer/>
      </context.Provider>
    </div>
  );
}

export default App;
