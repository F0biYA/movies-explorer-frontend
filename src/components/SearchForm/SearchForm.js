import React, { useState } from "react";
import './SearchForm.css';
import { useForm } from 'react-hook-form';

function SearchForm({ filter, handleShortFilms, shortMovies }) {
  const [searchValue, setSearchValue] = useState("");
  const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange', });

  /*Функции изменения инпутов*/
  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
  }
  /*функция саббмита формы поиска*/
  function onSubmit(data) {
    localStorage.removeItem('movies-search');
    filter(data.searchValue);
  }

  return (
    <section className="searchForm">
      <form className="searchForm__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="searchForm__form__input-container ">
          <input type="text" className="searchForm__form__input"
            placeholder={localStorage.getItem('search-value') ? localStorage.getItem('search-value') : 'Фильм'} required
            {...register("searchValue", {
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
                    checked={shortMovies ? true : false}  />
            <span className="searchForm__form__filter-slider" />
          </label>
        </fieldset>
      </form>
    </section>
  )
}
export default SearchForm;
