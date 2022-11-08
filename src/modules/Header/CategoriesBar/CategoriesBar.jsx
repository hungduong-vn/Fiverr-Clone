import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Navigate, useNavigate } from "react-router-dom";
import DropDownAnt from "../../../components/Home/DropDownAntd/DropDownAntd";
import { breakpoints } from "../../../constants/common";
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

  const isNavFull = useMediaQuery({
    query: `(min-width: ${breakpoints.categoriesBar}px)`,
  });
  const hoverContent = (list) =>
    list.length > 0 ? <CategoriesHover categoryList={list} /> : null;
  const navigate = useNavigate();
  const navToJobCatPage = (jobCatId) => {
    navigate(`/categories/${jobCatId}`);
  };

  return (
    <div id="categoriesBar">
      <StyledCategoriesBar className={`${showCategories ? "show" : ""}`}>
        <CategoriesNav className={`${overflowNav ? "overflow" : ""}`}>
          {overflowNav && <SlideBtn navListRef={navListRef} isStart={true} />}
          <CatgoriesList ref={navListRef}>
            {navMenu.map((ele, idx) => {
              return isNavFull ? (
                <DropDownAnt
                  key={idx}
                  title={
                    <CategoriesNavItem onClick={() => navToJobCatPage(ele.id)}>
                      <span>{ele.tenLoaiCongViec}</span>
                    </CategoriesNavItem>
                  }
                  content={hoverContent(ele.dsNhomChiTietLoai)}
                  hideArrow={true}
                  isHover={true}
                ></DropDownAnt>
              ) : (
                <CategoriesNavItem onClick={() => navToJobCatPage(ele.id)}>
                  {ele.tenLoaiCongViec}
                </CategoriesNavItem>
              );
            })}
          </CatgoriesList>
        </CategoriesNav>
      </StyledCategoriesBar>
    </div>
  );
}
