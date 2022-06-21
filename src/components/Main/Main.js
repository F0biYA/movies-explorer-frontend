import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';
import { Link } from 'react-router-dom';
function Main() {

  return (
    <>
      <Header
        children={
          <>
            <Link to="/signup" className="header__link hover">Регистрация</Link>
            <Link to="/signin" className="header__link header__button-link hover">Войти</Link>
          </>}
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
