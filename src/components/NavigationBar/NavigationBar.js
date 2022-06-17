import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavigationBar.css';
import AccountButton from "../AccountButton/AccountButton";
import NavMenu from "../NavMenu/NavMenu";
function NavigationBar() {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleNavMenuClick = () => setIsNavMenuOpen(true);
  const closeNavMenuClick = () => setIsNavMenuOpen(false)
  return (
    <>
      <nav className="navigationBar__container">
        <Link to='/movies' className="navigationBar__link hover">Фильмы</Link>
        <Link to='/saved-movies' className="navigationBar__link hover">Сохранённые фильмы</Link>
        <AccountButton />
      </nav>
      <button className="navigationBar__button-menu hover" onClick={handleNavMenuClick}></button>
      <NavMenu isOpen={isNavMenuOpen} isClose={closeNavMenuClick}></NavMenu>
    </>
  )
}
export default NavigationBar;
