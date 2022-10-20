import React, { useEffect, useState } from "react";
import FiverLogo from "../../components/Svg/FiverLogo";
import CategoriesBar from "./CategoriesBar/CategoriesBar";
import "./Header.scss";
import HeaderList from "./HeaderList/HeaderList";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import NavShowBtn from "./NavShowBtn/NavShowBtn";

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
