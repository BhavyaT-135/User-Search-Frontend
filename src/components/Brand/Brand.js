import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './brand.css'

function Brand() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/car_brand')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])

  return (
    <div>Brand</div>
  )
}

export default Brand