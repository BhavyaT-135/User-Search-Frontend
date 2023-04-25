import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './brand.css'
import Table from '../Table/Table'

function Brand() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://user-search-backend.vercel.app/api/v1/users/car_brand')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])

  return (
    <div className='brand'>
      <h2>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h2>
      <Table users={users} />
    </div>
  )
}

export default Brand