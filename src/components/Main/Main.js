import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

function Main({loggedIn}) {

  return (
    <>
      <Header
        children={ !loggedIn ?
          <>
            <Link to="/signup" className="header__link hover">Регистрация</Link>
            <Link to="/signin" className="header__link header__button-link hover">Войти</Link>
          </>
          : <NavigationBar/>}
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}
export default Main;
