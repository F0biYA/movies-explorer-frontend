import React from "react";
import '../Register/Register.css';
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Link} from 'react-router-dom';
import './Profile.css';
function Profile() {

  return (
    <section className="profile">
      <Header
        children={
          <NavigationBar />
        } />
   <form className="profile__form">
        <h3 className="profile__form__title">
        Привет, Александр!
        </h3>
        <fieldset className="profile__form__container">
          <div className="profile__form__input-container">
          <label className="profile__form__input__title">Имя</label>
            <input className="profile__form__input hover" type="text" value={'Александр'} required minLength="2" maxLength="40" ></input>
          </div>
          <div className="profile__form__input-container">
          <label className="profile__form__input__title">E-mail</label>
            <input className="profile__form__input hover" type="email" required value={'pochta@yandex.ru'}></input>
          </div>
        </fieldset>
        <div className="profile__form__submit-container">
          <button className="profile__form__button hover">Редактировать</button>
          <Link to='/' className="profile__form__button-signOut hover">Выйти из аккаунта</ Link>
        </div>
      </form>

  </section >
  )
}
export default Profile;
