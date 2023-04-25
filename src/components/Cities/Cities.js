import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './cities.css'
import TableCities from '../TableCities/TableCities'

function Cities() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/cities')
    .then(res => {
      setCities(res.data.users)
    })
  }, [])
  
  return (
    <div className='cities'>
      <h2>Show the data of top 10 cities which have the highest number of users and their average income.</h2>
      <TableCities cities={cities} />
    </div>
  )
}

export default Cities