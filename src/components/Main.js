import React from 'react';
import '../index.css';
import Group from '../images/Group.png';

function Main() {
  return (
    <section className='main-container'>
      <img src={Group} alt='Photo grid' className='group-img' />
      <h2 className='main-header'>Online Experiences</h2>
      <p className='main-text'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Main;
