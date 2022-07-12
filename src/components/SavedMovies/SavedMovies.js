import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
console.log(props)
  return (
    <section className="savedMovies">
      <Header
        children={
          <NavigationBar />
        } />
     <SearchForm handleShortFilms={props.handleShortFilms} shortMovies={props.shortMovies} filter={props.filter}/>
      <MoviesCardList deleteMovie={props.deleteMovie} data={props.movies} hide={true} />
      {props.isPreloader ? <Preloader /> : ''}
      <Footer />
    </section>
  )
}
export default SavedMovies;
