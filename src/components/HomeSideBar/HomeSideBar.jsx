import React from "react";
import { useDispatch } from "react-redux";
import { setShowSideBar } from "../../store/actions/layout.actions";
import { SideBarStyle } from "../../styles/SideBarStyled/SideBarStyled";
import "./HomeSideBar.scss";
import SideBarContent from "./SideBarContent/SideBarContent";
export default function HomeSideBar() {
  const dispatch =useDispatch();
  return (
    <div id="sideBar">
      <SideBarStyle>
        <SideBarContent/>
      </SideBarStyle>
      <div className="sideBar__overlay" onClick={() => dispatch(setShowSideBar(false))}></div>
    </div>
  );
}
