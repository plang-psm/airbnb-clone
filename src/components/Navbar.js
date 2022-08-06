import React from 'react';
import '../index.css';
import airbnb from '../images/airbnb.png';

function Navbar() {
  return (
    <nav className='header-container'>
      <img src={airbnb} alt='Navbar' className='airbnb-logo' />
    </nav>
  );
}

export default Navbar;
