import React from "react";
import '../Register/Register.css';
import Logo from "../Logo/Logo";
import {Link} from 'react-router-dom';
function Login() {

  return (
    <section className="register">
      <div className="register__header">
        <Logo></Logo>
      </div>
      <form className="form">
        <h3 className="form__title">
        Рады видеть!
        </h3>
        <fieldset className="form__container">
          <div className="form__input-container">
          <label className="form__input__title">E-mail</label>
            <input className="form__input hover" type="email" required></input>
            <span className="form__error"></span>
          </div>
          <div className="form__input-container">
          <label className="form__input__title">Пароль</label>
            <input className="form__input hover" type="password" required minLength="2" maxLength="10"></input>
            <span className="form__error"></span>
          </div>
        </fieldset>
        <div className="form__submit-container form__wrapper">
          <button className="form__submit-button hover">Войти</button>
          <span className="form__submit-title">Ещё не зарегистрированы? </span>
          <Link to='/signup' className="form__submit-link hover">Регистрация</ Link>
        </div>
      </form>

    </section>
  )
}
export default Login;
