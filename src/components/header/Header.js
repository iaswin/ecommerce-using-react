import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
    <h1>
        Aswin Store
    </h1>
    <Link to='/logout'>
    <buttton className='logout' >Logout</buttton>
    </Link>
    </header>
  )
}

export default Header
