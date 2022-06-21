import React from "react";
import './Register.css';
import Logo from "../Logo/Logo";
import {Link} from 'react-router-dom';
function Register() {

  return (
    <section className="register">
      <div className="register__header">
        <Logo></Logo>
      </div>
      <form className="form">
        <h3 className="form__title">
          Добро пожаловать!
        </h3>
        <fieldset className="form__container">
          <div className="form__input-container">
            <label className="form__input__title">Имя</label>
            <input className="form__input hover" type="text" required minLength="2" maxLength="40"></input>
            <span className="form__error"></span>
          </div>
          <div className="form__input-container">
          <label className="form__input__title">E-mail</label>
            <input className="form__input hover" type="email" required></input>
            <span className="form__error"></span>
          </div>
          <div className="form__input-container">
          <label className="form__input__title">Пароль</label>
            <input className="form__input hover" required type="password" minLength="2" maxLength="10"></input>
            <span className="form__error"></span>
          </div>
        </fieldset>
        <div className="form__submit-container">
          <button className="form__submit-button hover">Зарегистрироваться</button>
          <span className="form__submit-title">Уже зарегистрированы? </span>
          <Link to='/signin' className="form__submit-link hover">Войти</ Link>
        </div>
      </form>

    </section>
  )
}
export default Register;
