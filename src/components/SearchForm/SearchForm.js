import React from "react";
import './SearchForm.css';
function SearchForm() {

  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <fieldset className="searchForm__form__input-container ">
          <input type="text" name="text" className="searchName__form__input" placeholder="Фильм"></input>
          <button type="submit" className="searchForm__form__search-button"></button>
        </fieldset>

        <fieldset className="searchName__form__filter-container">
          <p className="searchForm__form__filter__title">Короткометражки</p>
          <label className="searchName__form__filter-switch hover">
            <input className="searchName__form__filter-checkbox" type="checkbox" />
            <span className="searchName__form__filter-slider" />
          </label>
        </fieldset>
      </form>
    </section>
  )
}
export default SearchForm;
