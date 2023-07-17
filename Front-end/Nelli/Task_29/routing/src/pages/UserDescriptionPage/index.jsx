import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleUser } from '../../requests/users-req';
import { useEffect } from 'react';


export default function UserDescriptionPage() {
 
const [ user, setUser ] = useState([]);

  useEffect(() => {
    getSingleUser(id, setUser)
}, []);

const {id} = useParams();

const {firstName, lastName, age} = user;

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
    </div>
  )
}
