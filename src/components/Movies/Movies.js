import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Movies.css';
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  // const [isPreloader, setIsPreloader] = useState(false)
  // const [allMovies, setAllMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);
  // const [shortMovies, setShortMovies] = useState(false)

  // function filterMovie (searchValue) {
  //   const tempMovies = searchMovies(allMovies, searchValue);
  //   localStorage.setItem('search-movies', JSON.stringify(tempMovies));
  //   localStorage.setItem('search-value', searchValue);
  //   return setFilteredMovies(tempMovies);
  // }

  //   function searchMovies(movies, value) {

  //     if (!(localStorage.getItem('movies-short') === 'true')) { const tempShortMovies = movies.filter((m) => {return m.duration < 40})
  //     return tempShortMovies.filter((m) => {
  //       return  m.nameRU.toLowerCase().includes(value.toLowerCase())
  //       });
  //     }
  //     else {
  //     return movies.filter((m) => {
  //     return  m.nameRU.toLowerCase().includes(value.toLowerCase())
  //     });
  //   }
  //   }

  // useEffect(() => {
  //   if (logged) {
  //     if(localStorage.getItem('search-movies')){
  //       setFilteredMovies(JSON.parse(localStorage.getItem('search-movies')))
  //     }
  //     moviesApi.getMovies()
  //       .then((data) => {
  //         setAllMovies(data);
  //         setIsPreloader(true)
  //       })
  //       .catch((err) => {
  //         console.log(`Невозможно отобразить карточки с сервера ${err}`)
  //       })
  //       .finally(() => setIsPreloader(false))
  //   }
  // }, [logged])

  // function handleShortFilms() {
  //   setShortMovies(!shortMovies);
  //   localStorage.setItem('movies-short', shortMovies);
  //   filterMovie(localStorage.getItem('search-value'));
  // }

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
