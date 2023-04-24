import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './name.css'

function Name() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/last_name')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])
  
  return (
    <div>Name</div>
  )
}

export default Name