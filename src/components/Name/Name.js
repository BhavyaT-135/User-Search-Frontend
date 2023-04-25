import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './name.css'
import Table from '../Table/Table'

function Name() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/last_name')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])
  
  return (
    <div className='name'>
      <h2>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h2>
      <Table users={users} />
    </div>
  )
}

export default Name