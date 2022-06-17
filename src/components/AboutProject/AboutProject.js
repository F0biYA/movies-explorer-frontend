import React from "react";
import './AboutProject.css';

function AboutProject() {

  return (
    <section className="aboutProject">
      <h2 id="о_проекте" className="section__title">О проекте</h2>
      <div className="aboutProject__container">
        <h4 className="aboutProject__container-title">Дипломный проект включал 5 этапов</h4>
        <h4 className="aboutProject__container-title">На выполнение диплома ушло 5 недель</h4>
        <p className="aboutProject__container-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="aboutProject__container-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      <div className="aboutProject__timeLine">
        <div className="aboutProject__timeLine__Element">1 неделя</div>
        <div className="aboutProject__timeLine__Element">4 недели</div>
        <p className="aboutProject__timeLine__title">Back-end</p>
        <p className="aboutProject__timeLine__title">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
