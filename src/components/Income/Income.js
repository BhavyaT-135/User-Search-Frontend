import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './income.css'

function Income() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/income')
    .then(res => {
      setUsers(res.data.users)
    })
  }, [])
  
  return (
    <div>Income</div>
  )
}

export default Income