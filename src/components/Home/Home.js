import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
  return (
    <div className='home-container'>
      <Link to="/income">
        <Button variant="contained" color="secondary">Income</Button>
      </Link>
      <Link to="/price">
        <Button variant="contained" color="error">Price</Button>
      </Link>
      <Link to="/brand">
        <Button variant="contained" color="info">Brand</Button>
      </Link>
      <Link to="/name">
        <Button variant="contained" color="warning">Name</Button>
      </Link>
      <Link to="/cities">
        <Button variant="contained" color="success">Cities</Button>
      </Link>
    </div>
  )
}

export default Home