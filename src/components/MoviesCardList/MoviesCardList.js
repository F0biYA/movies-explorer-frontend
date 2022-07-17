import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMoreMovie from "../ButtonMoreMovie/ButtonMoreMovie";
import { DECK_SIZE, TABLET_SIZE, MOBILE_SIZE} from "../../utils/constants";


function MoviesCardList(props) {
  const location = useLocation();
  let saved = false;

  const moviesCount = DECK_SIZE || TABLET_SIZE || MOBILE_SIZE;
  const [countMovies, setCountMovies] = useState(moviesCount);
  const [freeCell, setFreeCell] = useState(0);
  function resizeWindow() {

    const moviesCountResize = DECK_SIZE || TABLET_SIZE || MOBILE_SIZE
    setCountMovies(moviesCountResize);
  }

  //функция работы кнопки "ещё"
  function loadMore() {
    if (window.innerWidth >= 1181) {
      setCountMovies(countMovies + 3);

    } else {
      setCountMovies(countMovies + 2);
    }
  }

  //добавляю слушатель ресайза экрана
  useEffect(() => {

    window.addEventListener('resize', resizeWindow);
  }, [])

  //проверяю количество свободных ячеек
  useEffect(() => {
    setFreeCell(props.data.length - countMovies)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMovies]);

  function getMovies(data, savedMovies) {

    if (data.length > 0) {

      if (location.pathname === '/movies') {
      return data.slice(0, countMovies).map((movie) => {
        saved = false;
          savedMovies.forEach((m) => {
            if (m.movieId === movie.id) {
              return saved = true
            }// else return saved = false
          })
          return (
            <MoviesCard
              movie={movie}
              //save={props.save}
              saved={saved}
              saveMovie={props.saveMovie}
              deleteMovie={props.deleteMovie}
            />
          )
      })
     }  else if (location.pathname === '/saved-movies') {
        return data.map((movie) => {

      return (
        <MoviesCard
          movie={movie}
         // save={props.save}
          saved={true}
          deleteMovie={props.deleteMovie}
        />
      )
  });
}
}
//return (<p className="moviesCardList__message">Ничего не найдено</p>)
  }
return (
  <>
    <section className="moviesCardList">
      {getMovies(props.data, props.savedMovies)}
      {location.pathname === '/movies' && localStorage.getItem('search-value') && props.data.length === 0 ?  <p className="moviesCardList__message">Ничего не найдено</p> : ''}
      {location.pathname === '/saved-movies'  && props.data.length === 0 ?  <p className="moviesCardList__message">Ничего не найдено</p> : ''}
    </section>
    { } <ButtonMoreMovie freeCell={freeCell} hide={props.hide ? true : false} loadMore={loadMore} />
  </>
)
}
export default MoviesCardList;
