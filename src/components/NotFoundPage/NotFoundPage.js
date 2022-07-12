import React from "react";
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import Preloader from "../Preloader/Preloader";
function NotFoundPage() {

  return (
    <section className="notFoundPage">
      <Preloader/>
      <h4 className="notFoundPage__title">404</h4>
      <p className="notFoundPage__subtitle">Страница не найдена</p>
      <Link to='/' className="notFoundPage__link hover">Назад</Link>
      </section>
  )
}
export default NotFoundPage;
