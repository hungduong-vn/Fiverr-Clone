import React from "react";
import SignInBtn from "../../../components/Home/SIgnInBtn/SignInBtn";
import SignUpBtn from "../../../components/Home/SignUpBtn/SignUpBtn";
import GlobeIcon from "../../../components/Svg/GlobeIcon";

import "./HeaderList.scss";
export default function HeaderList() {
  return (
    <nav className="header__nav d-flex">
      <ul className="header__items">
        <li className="header__item hide-md">
          <a className="header__item__text header__business" href="/">
            Fiverr Business
          </a>
        </li>
        <li className="header__item hide-md">
          <a className="header__item__text" href="/">
            Explore
          </a>
        </li>
        <li className="header__item hide-lg">
          <a className="header__item__text d-flex" href="/">
            <span className="header__globe__icon d-flex align-items-center">
              <GlobeIcon />
            </span>{" "}
            English
          </a>
        </li>
        <li className="header__item hide-lg">
          <a className="header__item__text" href="/">
            $ USD
          </a>
        </li>
        <li className="header__item hide-md">
          <a className="header__item__text" href="/">
            Become a Seller
          </a>
        </li>
        <li className="header__item hide-sm">
            <SignInBtn className="header__item__text" innerText="Sign in" />
        </li>
        <li className="header__item">
          <SignUpBtn
            innerText="Join"
            className="join__btn btn btn-outline-success"
          />
        </li>
      </ul>
    </nav>
  );
}
