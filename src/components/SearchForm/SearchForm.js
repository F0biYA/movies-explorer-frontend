import React, { useState } from "react";
import './SearchForm.css';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function SearchForm({ filter, handleShortFilms, shortMovies, filterSavedMovies }) {
  //localStorage.removeItem('saved-movies-short')
  const [searchValue, setSearchValue] = useState("");
  const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange', });
  const location = useLocation();
  /*Функции изменения инпутов*/
  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
    //localStorage.setItem('')
  }
  /*функция саббмита формы поиска*/
  function onSubmit(data) {
    localStorage.removeItem('search-movies');
    setSearchValue(data.searchValue);
    filter(data.searchValue);
  }

  function onSubmitSavedMovies(data) {
    localStorage.removeItem('search-saved-movies');
    localStorage.setItem('search-value-saved', data.searchValue);
    filterSavedMovies(data.searchValue)
    localStorage.removeItem('search-saved-movies');
    //localStorage.removeItem('search-value-saved');
  }

  return (
    <section className="searchForm">
      <form className="searchForm__form" onSubmit={location.pathname === "/movies" ? handleSubmit(onSubmit) : handleSubmit(onSubmitSavedMovies)}>
        <fieldset className="searchForm__form__input-container ">
          <input type="text" className="searchForm__form__input"
            placeholder="Фильм"
            {...register("searchValue", {
              value: location.pathname === "/movies" ? localStorage.getItem('search-value') || '' : '',
              onChange: handleSearchValueChange,
              required: 'Поле обязательно к заполнению',
              maxLength: {
                value: 40,
                message: 'Количество символов не более 40',
              },
            })}
          ></input>
          <button type="submit" className="searchForm__form__search-button hover" disabled={!isValid}></button>
          <span className="searchForm__error">{(errors.searchValue && errors.searchValue.message)}</span>
        </fieldset>
        <fieldset className="searchForm__form__filter-container">
          <p className="searchForm__form__filter__title">Короткометражки</p>
          <label className="searchForm__form__filter-switch hover">
            <input className="searchForm__form__filter-checkbox" type="checkbox"
              onChange={handleShortFilms}
              checked={location.pathname === "saved-movies" ? localStorage.getItem('saved-movies-short') ? JSON.parse(localStorage.getItem('saved-movies-short')) : false
                : shortMovies ? true : false}
            // checked={shortMovies ? true : false}
            />
            <span className="searchForm__form__filter-slider" />
          </label>
        </fieldset>
      </form>
    </section>
  )
}
export default SearchForm;
