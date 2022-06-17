import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesArray from "../../utils/moviesArray";

function MoviesCardList() {

  function getMovies(movies) {
    return movies.map((movie) => {
      return <MoviesCard
        name={movie.name}
        img={movie.img}
        duration={movie.duration}
        key={movie.id}
      />
    });
  }

  return (
    <section className="moviesCardList">
      {getMovies(moviesArray)}
    </section>
  )
}
export default MoviesCardList;
