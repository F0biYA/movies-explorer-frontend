import React from "react";
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__container">
        <a href="@" target='_blank' className="portfolio__link hover">Статичный сайт</a>
        <a href="@" target='_blank' className="portfolio__link hover">↗</a>
      </div>
      <div className="portfolio__container">
        <a href="@" target='_blank' className="portfolio__link hover">Адаптивный сайт</a>
        <a href="@" target='_blank' className="portfolio__link hover">↗</a>
      </div>
      <div className="portfolio__container">
        <a href="@" target='_blank' className="portfolio__link hover">Одностраничное приложение</a>
        <a href="@" target='_blank' className="portfolio__link hover">↗</a>
      </div>
    </section>
  )
}
export default Portfolio;
