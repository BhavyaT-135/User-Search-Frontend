import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './price.css'

function Price() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/phone_price')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])

  return (
    <div>Price</div>
  )
}

export default Price