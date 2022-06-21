import React from "react";
import foto from "../../images/mySelf.jpeg";
import './AboutMe.css';

function AboutMe() {

  return (
    <section className="aboutMe">
      <h2 id="студент" className="section__title">Студент</h2>
      <div className="aboutMe__profile">
        <div className="aboutMe__profile__description">
          <div className="aboutMe__profile__wrapper">
            <h2 className="aboutMe__profile__title">Александр</h2>
            <p className="aboutMe__profile_job">Фронтенд-разработчик, 39 лет</p>
            <p className="aboutMe__profile_about">Я родился и живу в Москве, закончил факультет радиоэлектроники МАИ (Московский Авиационный Институт).
              Люблю экстримальные виды спорта, слушать рок-музыку, путешестовать. Заканчиваю факультет Фронтенд-Разработки в Яндекс Практикум.</p>
          </div>
          <ul className="aboutMe__profile__links">
            <li><a className="aboutMe__profile__link hover" href="@">Facebook</a></li>
            <li><a className="aboutMe__profile__link hover" href="@">Github</a></li>
          </ul>
        </div>
        <img className="aboutMe__profile__image" src={foto} alt="Путилин Александр"></img>
      </div>
    </section>
  )
}
export default AboutMe;
