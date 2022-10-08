import React from "react";
import GlobeIcon from "../../Svg/GlobeIcon";
import "./HeaderList.scss";
export default function HeaderList() {
  return (
    <nav className="header__nav d-flex">
      <ul className="header__items">
        <li className="header__item">
          <a className="header__item__text header__business" href="/">
            Fiverr Business
          </a>
        </li>
        <li className="header__item">
          <a className="header__item__text" href="/">
            Explore
          </a>
        </li>
        <li className="header__item">
          <a className="header__item__text d-flex" href="/">
            <span className="header__globe__icon d-flex align-items-center">
              <GlobeIcon />
            </span>{" "}
            English
          </a>
        </li>
        <li className="header__item">
          <a className="header__item__text" href="/">
            $ USD
          </a>
        </li>
        <li className="header__item">
          <a className="header__item__text" href="/">
            Become a Seller
          </a>
        </li>
        <li className="header__item">
          <a className="header__item__text" href="/">
            Sign in
          </a>
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
