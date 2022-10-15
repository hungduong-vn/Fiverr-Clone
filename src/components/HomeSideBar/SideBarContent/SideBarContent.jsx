import React from "react";
import SignInBtn from "../../SIgnInBtn/SignInBtn";
import SignUpBtn from "../../SignUpBtn/SignUpBtn";
import GlobeIcon from "../../Svg/GlobeIcon";

export default function SideBarContent() {
  return (
    <>
      <div className="sidebar-header">
        <SignUpBtn innerText="Join Fiverr" />
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-item">
          <SignInBtn innerText="Sign in" />
        </div>
        <div className="sidebar-item">Browse Categories</div>
        <div className="sidebar-item">Explore</div>
        <div className="sidebar-item">Fiverr Business</div>
      </div>
      <div className="sidebar-footer">
        <div className="footer-title">General</div>
        <div className="footer-item">Home</div>
        <div className="footer-item">
          English <GlobeIcon />
        </div>
        <div className="footer-item">$ USD</div>
      </div>
    </>
  );
}
