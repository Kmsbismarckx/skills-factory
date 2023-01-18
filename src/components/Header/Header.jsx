import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isBurger, setIsBurger] = useState(false);

  const onBurger = () => setIsBurger(!isBurger);
  return (
    <header className="header">
      <img className="header__logo" src="/media/header_logo.svg" alt="System" />
      <ul className={`header__links ${isBurger ? "header__links_active" : ""}`}>
        <li onClick={() => setIsBurger(false)}>Домой</li>
        <li onClick={() => setIsBurger(false)}>Особенности</li>
        <li onClick={() => setIsBurger(false)}>Преимущества</li>
      </ul>
      <div
        className={`burger ${isBurger ? "burger_active" : ""}`}
        onClick={onBurger}
      >
        <span></span>
      </div>
    </header>
  );
};

export default Header;
