import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import DropDownAnt from "../../../components/Home/DropDownAntd/DropDownAntd";
import { breakpoints } from "../../../constants/common";
import { getMenuJobCats } from "../../../services/jobCategory";
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
  const { pathname } = useLocation();
  const isNavFull = useMediaQuery({
    query: `(min-width: ${breakpoints.categoriesBar}px)`,
  });
  // const showSlideBtn = useMediaQuery({
  //   query: `(min-width: ${breakpoints.categoriesBar}px)`,
  // });
  const hoverContent = (list, isWrapRight) =>
    list.length > 0 ? (
      <CategoriesHover right={isWrapRight} categoryList={list} />
    ) : null;
  const navigate = useNavigate();
  const navToJobCatPage = (jobCatId) => {
    navigate(`/categories/${jobCatId}`);
  };

  const [menu, setMenu] = useState([]);
  const fetchMenu = async () => {
    const result = await getMenuJobCats();
    // console.log(result.data.content);
    setMenu(result.data.content);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  const wrapRightThreshold = 4;

  return (
    <div id="categoriesBar">
      <StyledCategoriesBar className={`${showCategories ? "show" : ""}`}>
        <CategoriesNav className={`${overflowNav ? "overflow" : ""}`}>
          {overflowNav && <SlideBtn navListRef={navListRef} isStart={true} />}
          <CatgoriesList ref={navListRef}>
            {menu &&
              menu.map((ele, idx) => {
                return isNavFull ? (
                  <DropDownAnt
                    key={idx}
                    title={
                      <CategoriesNavItem
                        onClick={() => navToJobCatPage(ele.id)}
                      >
                        <span>{ele.name}</span>
                      </CategoriesNavItem>
                    }
                    content={hoverContent(
                      ele.job_subcategories,
                      idx > wrapRightThreshold
                    )}
                    hideArrow={true}
                    isHover={true}
                  ></DropDownAnt>
                ) : (
                  <CategoriesNavItem
                    onClick={() => navToJobCatPage(ele.id)}
                    key={ele.id}
                  >
                    {ele.name}
                  </CategoriesNavItem>
                );
              })}
          </CatgoriesList>
        </CategoriesNav>
      </StyledCategoriesBar>
    </div>
  );
}
