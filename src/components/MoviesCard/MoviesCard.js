import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, saveMovie, deleteMovie, saved }) {

  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  const handleDeleteClick = () => { //СДЕЛАТЬ
    console.log(movie.movieId)
    deleteMovie(movie)
  }
  const handleLikeClick = () => {
    setIsLiked(!isLiked);

    saveMovie(movie);
  };

  return (

    <div className="movieCard">
      <a href={movie.trailerLink} target='_blank' rel="noreferrer" >
        {/* <img src={!location.pathname === save ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} className="movieCard__image"></img> */}
        <img src={(location.pathname === '/movies') ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU} className="movieCard__image"></img>
      </a>

      <div className="movieCard__caption">
        <h2 className="movieCard__text">{movie.nameRU}</h2>
        <button type="button" onClick={saved ? handleDeleteClick : handleLikeClick} className={location.pathname === '/movies'
          ? saved ? 'movieCard__button-heart_active movieCard__button-heart hover' : 'movieCard__button-heart hover'
          : 'movieCard__button-delete hover'} ></button>

        <p className="movieCard__duration">{movie.duration}</p>
      </div>
    </div>
  )
}
export default MoviesCard;
