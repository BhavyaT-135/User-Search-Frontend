import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './price.css'
import Table from '../Table/Table'

function Price() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://user-search-backend.vercel.app/api/v1/users/phone_price')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])

  return (
    <div className='price'>
      <h2>Male Users which have phone price greater than 10,000.</h2>
      <Table users={users} />
    </div>
  )
}

export default Price