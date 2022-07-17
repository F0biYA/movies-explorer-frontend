import { API_URL } from "./constants";

class Api {
  constructor({ address, headers }) {
    this._address = address;
    // this._headers = headers;
  }

  /*проверка ответа сервера*/
  _handleResponse(response) {
    if (response.ok) return response.json();
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  /*токен для авторизации на закрытое содержимое */
  getContent(token) {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => data)
  }
  /* регистрация на серевер */
  register(name, email, password) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((response) => this._handleResponse(response));
  }

  /* авторизация на сервере*/
  authorize(email, password) {
    return fetch(`${this._address}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then((response) => this._handleResponse(response));
  };

  /*загрузка информации о пользователе с сервера (GET)*/
  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      // headers: this._headers,
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => this._handleResponse(response));
  }

  /*редактирование профиля (PATCH)   */
  patchUserInfo(data) {
    console.log(data);
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
      .then((response) => this._handleResponse(response));
  }

  /*получаю сохранненые фильмы  (GET)  */
  getSavedMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => this._handleResponse(response));
  }
  /*добавление фильма (POST)    */
  postMovie(movie) {
    console.log(movie)
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then((response) => this._handleResponse(response));
  }
  /* удаление фильма (DELETE)   */
  deleteMovie(movieId) {

    return fetch(`${this._address}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => this._handleResponse(response));
  }
}

export const api = new Api({
  address: API_URL,
  // headers: {
  //    authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //   "Content-Type": "application/json",
  // },
});
