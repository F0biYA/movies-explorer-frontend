import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Movies.css';
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMoreMovie from "../ButtonMoreMovie/ButtonMoreMovie";
function Movies() {
  return (
    <section className="movies">
      <Header
        children={
          <NavigationBar />
        } />
      <SearchForm />
      <MoviesCardList />
      {/*<Preloader />*/}
      <ButtonMoreMovie />
      <Footer />
    </section>

  )
}
export default Movies;
