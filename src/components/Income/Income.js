import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './income.css'
import Table from '../Table/Table'

function Income() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/income')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])
  
  return (
    <div className='income'>
      <h2>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h2>
      <Table users={users} />
    </div>
  )
}

export default Income