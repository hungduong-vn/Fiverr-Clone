import React, { useRef } from "react";
import { useSelector } from "react-redux";
import DropDownAnt from "../../../components/Home/DropDownAntd/DropDownAntd";
import { StyledCategoriesBar } from "../../../styles/Home/CategoriesBar/CategoriesBar";
import {
  CategoriesNav,
  CatgoriesList,
} from "../../../styles/Home/CategoriesBar/CategoriesNav/CategoriesNav";
import { CategoriesNavItem } from "../../../styles/Home/CategoriesBar/CategoriesNav/CategoriesNavItem";
import CategoriesHover from "./CategoriesHover/CategoriesHover";
import { navMenu } from "./data";
import SlideBtn from "./SlideBtn";

export default function CategoriesBar({ showCategories }) {
  const { overflowNav } = useSelector((state) => state.layoutReducer);
  const navListRef = useRef(null);

  return (
    <div id="categoriesBar">
      <StyledCategoriesBar className={`${showCategories ? "show" : ""}`}>
        <CategoriesNav className={`${overflowNav ? "overflow" : ""}`}>
          {overflowNav && <SlideBtn navListRef={navListRef} isStart={true} />}
          <CatgoriesList ref={navListRef}>
            {navMenu.map((ele, idx) => {
              return (
                <DropDownAnt
                  title={
                    <CategoriesNavItem key={idx}>
                      <span>{ele.tenLoaiCongViec}</span>
                    </CategoriesNavItem>
                  }
                  content={
                    <CategoriesHover categoryList={ele.dsNhomChiTietLoai} />
                  }
                  hideArrow={true}
                  isHover={true}
                ></DropDownAnt>
              );
            })}
            {/* <CategoriesNavItem className="firstCategoriesNavItem">Graphics & Design</CategoriesNavItem>
            <CategoriesNavItem>Digital Marketing</CategoriesNavItem>
            <CategoriesNavItem>Writing & Translation</CategoriesNavItem>
            <CategoriesNavItem>Video & Animation</CategoriesNavItem>
            <CategoriesNavItem>Music & Audio</CategoriesNavItem>
            <CategoriesNavItem>Programming & Tech</CategoriesNavItem>
            <CategoriesNavItem>Business</CategoriesNavItem>
            <CategoriesNavItem>Lifestyle</CategoriesNavItem>
            <CategoriesNavItem className="lastCategoriesNavItem">Trending</CategoriesNavItem> */}
          </CatgoriesList>
        </CategoriesNav>
      </StyledCategoriesBar>
    </div>
  );
}
