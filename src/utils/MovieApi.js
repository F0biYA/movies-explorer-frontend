class MoviesApi {
  constructor({ address,}) {
    this._address= address;
  }
  _handleResponse(response) {
    if (response.ok) return response.json();
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getMovies() {
    return fetch(`${this._address}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => this._handleResponse(response));
  }
}

export const moviesApi = new MoviesApi({
  address: "https://api.nomoreparties.co/beatfilm-movies",
});
