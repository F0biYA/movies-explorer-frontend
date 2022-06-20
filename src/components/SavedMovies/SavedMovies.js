import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMoreMovie from "../ButtonMoreMovie/ButtonMoreMovie";
import Footer from "../Footer/Footer";

function SavedMovies() {

  return (
    <section className="savedMovies">
      <Header
        children={
          <NavigationBar />
        } />
      <SearchForm />
      <MoviesCardList />
      {/*<Preloader />*/}
      <ButtonMoreMovie hide />
      <Footer />
    </section>
  )
}
export default SavedMovies;
