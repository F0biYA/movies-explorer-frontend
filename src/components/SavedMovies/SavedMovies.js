import React, { useEffect } from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";



function SavedMovies(props) {
 useEffect (()=> {
   localStorage.removeItem('search-value-saved');
   localStorage.removeItem('search-saved-movies');
    localStorage.removeItem('saved-movies-short')
})
  return (
    <section className="savedMovies">
      <Header
        children={
          <NavigationBar />
        } />
     <SearchForm handleShortFilms={props.handleShortFilms} shortMovies={props.shortMovies} filterSavedMovies={props.filterSavedMovies}/>
      <MoviesCardList deleteMovie={props.deleteMovie} data={localStorage.getItem('search-saved-movies') ? JSON.parse(localStorage.getItem('search-saved-movies')) : props.movies} hide={true} />
      {props.isPreloader ? <Preloader /> : ''}
      <Footer />
    </section>
  )
}
export default SavedMovies;
