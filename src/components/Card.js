import React from 'react';
import '../index.css';
// import katiez from '../images/katiez.png';
// import Star from '../images/Star.png';
// import Ellipse from '../images/Ellipse.png';
import Star from '../images/Star.png';

// Destructure what we're storing in cards so we dont have to use props -- props.img etc
function Card({ img, rating, reviewCount, location, title, price, openSpots }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='card-container'>
      {/* Conditional rendering -- If left is true, skip and ignore, if true display right */}
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img
        src={require(`../images/${img}`)}
        alt='Katie Z'
        className='card-img'
      />
      <div className='card-review'>
        <img src={Star} alt='Star' className='card-star' />
        <span>{rating}</span>
        <span className='gray'>({reviewCount}) • </span>

        <span className='gray'>{location}</span>
      </div>
      <p className='card-title'>{title}</p>
      <p className='card-price'>
        {' '}
        <span className='bold'>From ${price}</span> / Per person
      </p>
    </div>
  );
}

export default Card;
