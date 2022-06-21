import React from "react";
import { NavLink } from "react-router-dom";
import './NavMenu.css';
import AccountButton from "../AccountButton/AccountButton";

function NavMenu({isOpen, isClose}) {

  return (
    <section className={isOpen ? `navMenu navMenu_open` : `navMenu`}>
      <nav className="navMenu__container">
        <button type="button" onClick={isClose} className="navMenu__container__close-button hover"></button>
        <NavLink to='/' end
          className={({ isActive }) =>
            isActive ? 'link_state_active navMenu__container__link hover' : 'navMenu__container__link hover'} >Главная</NavLink>
        <NavLink to='/movies' className={({ isActive }) =>
          isActive ? 'link_state_active navMenu__container__link hover' : 'navMenu__container__link hover'}  >Фильмы</NavLink>
        <NavLink to='/saved-movies' className={({ isActive }) =>
          isActive ? 'link_state_active navMenu__container__link hover' : 'navMenu__container__link hover'}  >Сохранённые фильмы</NavLink>
        <AccountButton />
      </nav>

    </section>
  )
}
export default NavMenu;
