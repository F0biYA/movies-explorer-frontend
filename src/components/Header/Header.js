import './Header.css';
import React from 'react';
import Logo from '../Logo/Logo';

function Header({ children }) {

  return (
    <header className="header">
      <Logo />
      <div className="header__container">
        {children}
      </div>
    </header>

  )
};

export default Header;
