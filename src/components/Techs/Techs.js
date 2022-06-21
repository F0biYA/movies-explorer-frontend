import './Techs.css';
import React from 'react';
//import { Switch, Link, Route } from 'react-router-dom';      записать библиотеку

function Techs() {

  return (
    <section className="techs">
      <h2 id="технологии" className="section__title">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__container">
        <div className="techs__element">
          <p className="techs__element-text">HTML</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">CSS</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">JS</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">React</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">Git</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">Express.js</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">mongoDB</p>
        </div>
      </div>
    </section>

  )
};

export default Techs;
