import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
  return (
    <div className='home-container'>
      <Link to="/income">
        <Button className="home-buttons" variant="contained" color="secondary">Query 1</Button>
      </Link>
      <Link to="/price">
        <Button className="home-buttons" variant="contained" color="error">Query 2</Button>
      </Link>
      <Link to="/brand">
        <Button className="home-buttons" variant="contained" color="info">Query 3</Button>
      </Link>
      <Link to="/name">
        <Button className="home-buttons" variant="contained" color="warning">Query 4</Button>
      </Link>
      <Link to="/cities">
        <Button className="home-buttons" variant="contained" color="success">Query 5</Button>
      </Link>
    </div>
  )
}

export default Home