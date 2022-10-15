import React, { useEffect, useState } from "react";
import CategoriesBar from "../../components/Home/Header/CategoriesBar/CategoriesBar";
import HeaderList from "../../components/Home/Header/HeaderList/HeaderList";
import HeaderSearch from "../../components/Home/Header/HeaderSearch/HeaderSearch";
import NavShowBtn from "../../components/Home/Header/NavShowBtn/NavShowBtn";
import FiverLogo from "../../components/Svg/FiverLogo";

import "./Header.scss";
export default function Header() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  window.onscroll = () => {
    setScrollY(window.scrollY);
  };
  const [showCategories, setShowCategories] = useState(false)
  useEffect(() => {
    const header = document.querySelector("header");
    // console.log({ header });
    // console.log(scrollY);
    if (scrollY > 0) {
      header.classList.remove("header__transparent");
      if (scrollY > 170) {
        header.classList.remove("header__hidden");
        setShowCategories(true);

      } else {
        header.classList.add("header__hidden");
        setShowCategories(false);
      }
    } else {
      header.classList.add("header__transparent");
    }
  }, [scrollY]);

  return (
    <header className="header homeHeader header__transparent header__hidden">
      <div className="header__wrapper">
        <div className="header__row max-width-container">
          <NavShowBtn/>
          <a className="header__logo" href="/">
            <FiverLogo />
          </a>
          <div className="header__searchbar hide-sm">
            <HeaderSearch />
          </div>
          <div className="header__list">
            <HeaderList />
          </div>
        </div>
      </div>
      <CategoriesBar showCategories={showCategories}/>
    </header>
  );
}
