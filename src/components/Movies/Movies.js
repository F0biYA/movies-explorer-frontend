import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Movies.css';
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {

  return (
    <section className="movies">
      <Header
        children={
          <NavigationBar />
        } />
      <SearchForm handleShortFilms={props.handleShortFilms} shortMovies={props.shortMovies} filter={props.filter}/>
      {props.isPreloader ? <Preloader /> : ''}
      <MoviesCardList deleteMovie={props.deleteMovie} saveMovie={props.saveMovie} data={props.movies} savedMovies={props.savedMovies} button={false} />
      <Footer />
    </section>
  )
}
export default Movies;
