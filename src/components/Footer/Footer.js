import './Footer.css';
import React from 'react';
//import { Switch, Link, Route } from 'react-router-dom';      записать библиотеку

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
      <p className="footer__copyright">© 2022</p>
        <ul className="footer__links">
          <li className="hover"><a target="_blank" href="https://practicum.yandex.ru/" className="footer__link" rel="noreferrer">Яндекс.Практикум</a></li>
          <li className="hover"><a target="_blank" href="https://github.com/" className="footer__link" rel="noreferrer">Github</a></li>
          <li className="hover"><a target="_blank" href="@" className="footer__link">Facebook</a></li>
        </ul>

      </div>
    </footer>

  )
};

export default Footer;
