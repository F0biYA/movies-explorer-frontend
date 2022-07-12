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


  function filterMovie(searchValue) {
    const tempMovies = searchMovies(allMovies, searchValue);
    localStorage.setItem('search-movies', JSON.stringify(tempMovies));
    localStorage.setItem('search-value', searchValue);
    return setFilteredMovies(tempMovies);
  }

  function searchMovies(movies, value) {
    if ((localStorage.getItem('movies-short') === 'true')) {
      const tempShortMovies = movies.filter((m) => { return m.duration < 40 })
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
          setSavedMovies(data);
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

  /*получаю информацию о профиле с сервера*/
  useEffect(() => {
    if (jwt) {
      api.getUserInfo()
        .then((userInfoObject) => {
          setCurrentUser(userInfoObject)
          setLoggedIn(true);
          localStorage.setItem('user', userInfoObject.email);
          navigate('/movies')
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
          navigate('/movies');
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

  function signOut() {
    localStorage.clear();
    setAllMovies('');
    setFilteredMovies('');
    navigate('/signin');
    setLoggedIn(false);
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
                handleShortFilms={handleShortFilms} shortMovies={shortMovies} filter={filterMovie}
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
                movies={savedMovies}
                deleteMovie={handleDeleteMovie}
                handleShortFilms={handleShortFilms} shortMovies={shortMovies} filter={filterMovie} />
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
