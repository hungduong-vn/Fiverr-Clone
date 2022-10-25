import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../modules/Footer/Footer";
import Header from "../../modules/Header/Header";
import HomeSideBar from "../../modules/HomeSideBar/HomeSideBar";
import HomePage from "../../pages/HomePage";
import { setOverflowNavbar } from "../../store/actions/layout.actions";

export default function HomeLayout() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setViewWidth(window.innerWidth);
  };
  useEffect(() => {
    const homeEle = document.querySelector("#HOME");
    // console.log(viewWidth);
    if (viewWidth < 1160 && viewWidth > 899) {
      console.log("view-lg");
      homeEle.className = "view-lg";
    } else if (viewWidth > 599) {
      console.log("view-md");
      homeEle.className = "view-md";
    } else if (viewWidth < 600) {
      console.log("view-sm");
      homeEle.className = "view-sm";
    } else {
      homeEle.className = "view-xl";
    }
    if (viewWidth < 1267) {
      dispatch(setOverflowNavbar(true));
    } else {
      dispatch(setOverflowNavbar(false));
    }
  }, [viewWidth]);

  const layoutState = useSelector((state) => state.layoutReducer);
  const dispatch = useDispatch();
  return (
    <div id="HOME">
      <Header />
      <Outlet />
      <HomeSideBar isShown={layoutState.showSideBar} />
      <Footer />
    </div>
  );
}
