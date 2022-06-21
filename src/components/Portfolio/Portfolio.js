import React from "react";
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__container">
        <a href="https://github.com/F0biYA/how-to-learn" target='_blank' className="portfolio__link hover" rel="noreferrer">Статичный сайт</a>
        <a href="https://github.com/F0biYA/how-to-learn" target='_blank' className="portfolio__link hover" rel="noreferrer">↗</a>
      </div>
      <div className="portfolio__container">
        <a href="https://f0biya.github.io/russian-travel/" target='_blank' className="portfolio__link hover" rel="noreferrer">Адаптивный сайт</a>
        <a href="https://f0biya.github.io/russian-travel/" target='_blank' className="portfolio__link hover" rel="noreferrer">↗</a>
      </div>
      <div className="portfolio__container">
        <a href="https://f0biya.github.io/mesto/" target='_blank' className="portfolio__link hover" rel="noreferrer">Одностраничное приложение</a>
        <a href="https://f0biya.github.io/mesto/" target='_blank' className="portfolio__link hover" rel="noreferrer">↗</a>
      </div>
    </section>
  )
}
export default Portfolio;
