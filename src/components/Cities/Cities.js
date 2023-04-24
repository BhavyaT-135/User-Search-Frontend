import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './cities.css'

function Cities() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/cities')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])
  
  return (
    <div>Cities</div>
  )
}

export default Cities