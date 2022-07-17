/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import SavedMovies from '../SavedMovies/SavedMovies';
import { api } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUsetContext';
import ProtectedRoute from '../ProtectedRoute';
import { moviesApi } from "../../utils/MovieApi";
import { SHORT_DURATION } from '../../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  /*переменные состояния авторизации и маршрутов*/
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const jwt = localStorage.getItem('jwt');
  const [isPreloader, setIsPreloader] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([])
  const [shortSavedMovies, setShortSavedMovies] = useState(false);

  function filterMovie(searchValue) {
    const tempMovies = searchMovies(allMovies, searchValue);
    localStorage.setItem('search-movies', JSON.stringify(tempMovies));
    localStorage.setItem('search-value', searchValue);
    return setFilteredMovies(tempMovies);
  }

  function searchMovies(movies, value) {
    if ((localStorage.getItem('movies-short') === 'true')) {
      const tempShortMovies = movies.filter((m) => { return m.duration < SHORT_DURATION })
      return tempShortMovies.filter((m) => {
        return m.nameRU.toLowerCase().includes(value.toLowerCase())
      });
    }
    else {
      return movies.filter((m) => {
        return m.nameRU.toLowerCase().includes(value.toLowerCase())
      });
    }
  }

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem('search-movies')) {
        setFilteredMovies(JSON.parse(localStorage.getItem('search-movies')))
      }
      moviesApi.getMovies()
        .then((data) => {
          setAllMovies(data);
          setIsPreloader(true)
          localStorage.setItem('movies-short', shortMovies)
        })
        .catch((err) => {
          console.log(`Невозможно отобразить фильмы с сервера ${err}`)
        })
        .finally(() => setIsPreloader(false))
      api.getSavedMovies()
        .then((data) => {
          const userSavedList = data.filter(m => m.owner === currentUser._id);
          setSavedMovies(userSavedList);
          setIsPreloader(true)
          //   localStorage.setItem('movies-short', shortMovies)
        })
        .catch((err) => {
          console.log(`Невозможно отобразить сохранненые фильмы с сервера ${err}`)
        })
        .finally(() => setIsPreloader(false))
    }
  }, [loggedIn])

  function handleShortFilms() {
    setShortMovies(!shortMovies);
    localStorage.setItem('movies-short', !shortMovies);
    filterMovie(localStorage.getItem('search-value'));
  }
  function handleShortSavedFilms() {
    setShortSavedMovies(!shortSavedMovies);
    localStorage.setItem('saved-movies-short', !shortSavedMovies);
    filterSavedMovies('');
  }

  /*получаю информацию о профиле с сервера*/
  useEffect(() => {
    if (jwt) {
      api.getUserInfo()
        .then((userInfoObject) => {
          setCurrentUser(userInfoObject)
          setLoggedIn(true);
          localStorage.setItem('user', userInfoObject.email);
          // navigate('/movies')
        })
        .catch((err) => {
          console.log(`Невозможно получить информацию о пользователе ${err}`);
        });
    }
  }, [jwt]);

  /*функция регистрации  */
  function handleRegister(name, email, password) {
    return api.register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  /*функция  логина */
  function handleLogin(email, password) {
    return api.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          localStorage.setItem('login', true);
          navigate('/movies');
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  /*функция изменения данных в профиле*/
  function handleUpdateUser(data) {
    api.patchUserInfo(data)
      .then((userInfoObject) => {
        setCurrentUser(userInfoObject);
      })
      .catch((err) => {
        console.log(`Невозможно загрузить данные на сервер ${err}`);
      })
  }

  //сохраняю фильм и обновляю список сохраненных
  function handleSaveMovie(movie) {
    api
      .postMovie(movie)
      .then((data) => setSavedMovies([data, ...savedMovies]))
      //.then((data) => console.log(data))
      .catch((err) => {
        console.log(`Невозможно загрузить данные на сервер ${err}`);
      })
  }

  //удаляю и сразу обновляю массив сохраненных фильмов
  function handleDeleteMovie(movie) {
    const savedMovieId = savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    api.deleteMovie(savedMovieId._id)
      .then(() => {
        console.log('удалено')
        const newSavedMovies = savedMovies.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(`Невозможно удалить фильм: ${err}`);
      })
  }
  function filterSavedMovies(searchValue) {
    const tempSavedMovies = searchSavedMovies(savedMovies, searchValue)
    localStorage.setItem('search-saved-movies', JSON.stringify(tempSavedMovies));
    return setFilteredSavedMovies(tempSavedMovies)
  }
  function searchSavedMovies(movies, value) {
    if ((localStorage.getItem('saved-movies-short') === 'true')) {
      const tempShortSavedMovies = movies.filter((m) => { return m.duration < 40 })
      return tempShortSavedMovies.filter((m) => {
        return m.nameRU.toLowerCase().includes(value.toLowerCase())
      });
    }
    else {
      return movies.filter((m) => {
        return m.nameRU.toLowerCase().includes(value.toLowerCase())
      });
    }
  }

  function signOut() {
    localStorage.clear();
    navigate('/');
    window.location.reload()
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <Routes>
        {/* Роуты без авторизации */}
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Register handleRegister={handleRegister} />} />

        { /* Роуты с авторизацией */}
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies logged={loggedIn}
                saveMovie={handleSaveMovie}
                deleteMovie={handleDeleteMovie}
                movies={filteredMovies}
                savedMovies={savedMovies}
                handleShortFilms={handleShortFilms} shortMovies={shortMovies} filter={filterMovie} filterSavedMovies={filterSavedMovies}
                isPreloader={isPreloader} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                isPreloader={isPreloader}
                movies={localStorage.getItem('search-value-saved') ? filteredSavedMovies : savedMovies}
                // filteredSavedMovies={filteredSavedMovies}
                deleteMovie={handleDeleteMovie}
                handleShortFilms={handleShortSavedFilms}
                shortMovies={localStorage.getItem('saved-movies-short') ? JSON.parse(localStorage.getItem('saved-movies-short')): shortSavedMovies}
                // shortMovies={JSON.parse(localStorage.getItem('saved-movies-short'))}
                filter={filterMovie}
                filterSavedMovies={filterSavedMovies} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onUpdateUser={handleUpdateUser} onLogout={signOut} />
            </ProtectedRoute>
          }
        />
        { /* Ощибка в маршрутах */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>


  );
}

export default App;
