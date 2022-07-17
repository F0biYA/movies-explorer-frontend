/* eslint-disable no-useless-escape */
import { useEffect, useContext, useState } from 'react';
import '../Register/Register.css';
import { CurrentUserContext } from '../../contexts/CurrentUsetContext';
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import './Profile.css';
import { useForm } from 'react-hook-form';

function Profile({ onUpdateUser, onLogout }) {

  const currentUser = useContext(CurrentUserContext);

  /*переменные состояния имя и email*/
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  //const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange', });
  const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm({ mode: 'onChange', });

  /*используем эффект */
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email)
  }, [currentUser]);

  /*Функции изменения инпутов*/
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  /*функция саббмита формы профиля*/
  function onSubmit(data) {
    console.log(data);
    console.log(name);
    console.log(email)
    onUpdateUser({
      name: data.name,
      email: data.email,
    });
  }
  const formValidity = (name !== currentUser.name || email !== currentUser.email) && isDirty && isValid && (name !== '') && (email !== '')
  //  console.log('isDirty ' + isDirty)
  //  console.log('isValid ' + isValid)
  //  console.log('name=curname ' + (name === currentUser.name))
  //  console.log(isDirty && isValid && (name === currentUser.name))
  //  console.log(name);
  //  console.log(currentUser.name)
  //  console.log('rformValidity ' + formValidity)
  // console.log(name !== currentUser.name)
  return (
    <section className="profile">
      <Header
        children={
          <NavigationBar />
        } />
      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="profile__form__title">
          {`Привет, ${name}`}
        </h3>
        <fieldset className="profile__form__container">
          <div className="profile__form__input-container">
            <label className="profile__form__input__title">Имя</label>
            <input className="profile__form__input hover" type="text"
              value={name}
              {...register("name", {
                onChange: handleNameChange,
                //required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 2,
                  message: 'Количество символов не менее 2',
                },
                maxLength: {
                  value: 40,
                  message: 'Количество символов не более 40',
                },
              })}
            ></input>
          </div>
          <div className="profile__form__input-container">
            <label className="profile__form__input__title">E-mail</label>
            <input className="profile__form__input hover" type="email"
              value={email}
              {...register('email', {
                onChange: handleChangeEmail,
                //required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 4,
                  message: 'Количество символов не менее 4',
                },
                maxLength: {
                  value: 40,
                  message: 'Количество символов не более 40',
                },
                pattern: {
                  value:
                    /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i,
                  message:
                    "Введите корректный Email",
                },
              })}></input>
          </div>
        </fieldset>
        <div className="profile__form__submit-container">
          <span className="form__error">{(errors.email && errors.email.message) || (errors.name && errors.name.message)}</span>
          <button className={formValidity ? "profile__form__button hover" : "profile__form__button profile__form__button_disabled"}
            disabled={formValidity ? false : true}>Редактировать</button>
          <button className="profile__form__button-signOut hover" onClick={onLogout} >Выйти из аккаунта</ button>
        </div>
      </form>

    </section >
  )
}
export default Profile;
