import React from "react";
import HeaderList from "../../components/Header/HeaderList/HeaderList";
import HeaderSearch from "../../components/Header/HeaderSearch/HeaderSearch";
import FiverLogo from "../../components/Svg/FiverLogo";
import "./Header.scss";
export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__row max-width-container">
          <a className="header__logo" href="/">
            <FiverLogo />
          </a>
          <div className="header__searchbar">
            <HeaderSearch />
          </div>
          <HeaderList />
        </div>
      </div>
    </div>
  );
}
