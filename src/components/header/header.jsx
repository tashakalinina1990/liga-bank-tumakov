import React from "react";
import Logo from "../logo/logo";
import MainNavigation from "../navigation/main-navigation/main-navigation";
import UserMenu from "../user-menu/user-menu";
import "./header.scss";

const Header = () => (
  <header className="header">
    <div className="header__wrap wrapper">
      <div className="header__logo">
        <Logo />
      </div>
      <nav className="header__navigation">
        <MainNavigation />
      </nav>
      <div className="header__user-menu">
        <UserMenu />
      </div>
    </div>
  </header>
);

export default Header;
