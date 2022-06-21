import React from "react";
import './Promo.css';

function Promo() {
   return (
<section className="promo">
    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    <div className="promo__nav">
      <a href="#о_проекте" className="promo__nav__element hover">О проекте</a>
      <a href="#технологии" className="promo__nav__element hover">Технологии</a>
      <a href="#студент" className="promo__nav__element hover">Студент</a>
    </div>
</section>
   )
}

export default Promo;
