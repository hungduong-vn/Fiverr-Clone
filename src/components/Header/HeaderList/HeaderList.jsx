import React from "react";
import GlobeIcon from "../../Svg/GlobeIcon";
import "./HeaderList.scss";
export default function HeaderList() {
  return (
    <nav className="header__nav d-flex">
      <ul className="header__items">
        <li className="header__item">
          <a href="/">Fiverr Business</a>
        </li>
        <li className="header__item">
          <a href="/">Explore</a>
        </li>
        <li className="header__item">
          <a href="/">
            <GlobeIcon /> English
          </a>
        </li>
        <li className="header__item">
          <a href="/">$ USD</a>
        </li>
        <li className="header__item">
          <a href="/">Become a Seller</a>
        </li>
        <li className="header__item">
          <a href="/">Sign In</a>
        </li>
        <li className="header__item">
          <a href="">
            <button className="join__btn btn btn-outline-success">Join</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
