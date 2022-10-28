import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const [showCategories, setShowCategories] = useState(false);
  useEffect(() => {
    const header = document.querySelector("header");
    console.log({pathname});
    if (pathname !== "/") {
      header.style.position = "relative";
      setShowCategories(true);
      return;
    } else {
      header.style.position = "fixed";
      setShowCategories(false);
    }
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
  }, [scrollY, pathname]);

  return (
    <header
      className={`header homeHeader ${
        pathname === "/" ? "header__transparent header__hidden" : ""
      }`}
    >
      <div className="header__wrapper">
        <div className="header__row max-width-container">
          <NavShowBtn />
          <Link className="header__logo" to="/">
            <FiverLogo />
          </Link>
          <div className="header__searchbar hide-sm">
            <HeaderSearch />
          </div>
          <div className="header__list">
            <HeaderList />
          </div>
        </div>
      </div>
      <CategoriesBar showCategories={showCategories} />
    </header>
  );
}
