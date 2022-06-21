import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
function MoviesCard({ name, img, duration, key }) {

  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (

    <div className="movieCard">
      <img src={img} alt="" className="movieCard__image"></img>
      <div className="movieCard__caption">
        <h2 className="movieCard__text">{name}</h2>
        <button type="button" onClick={handleLikeClick} className={location.pathname === '/movies'
          ? isLiked ? 'movieCard__button-heart_active movieCard__button-heart hover' : 'movieCard__button-heart hover'
          : 'movieCard__button-delete hover'} ></button>

        <p className="movieCard__duration">{duration}</p>
      </div>
    </div>
  )
}
export default MoviesCard;
