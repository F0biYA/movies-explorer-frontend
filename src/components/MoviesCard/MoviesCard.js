import React from "react";
import './MoviesCard.css';
function MoviesCard({name, img, duration, key}) {

  return (

    <div className="movieCard">
      <img src={img} alt="" className="movieCard__image"></img>
      <div className="movieCard__caption">
        <h2 className="movieCard__text">{name}</h2>
        <button type="button" className="movieCard__button-heart"></button>
        <p className="movieCard__duration">{duration}</p>
        {/* <button type="button" className="card__button-delete"></button> */}
      </div>
    </div>
  )
}
export default MoviesCard;
