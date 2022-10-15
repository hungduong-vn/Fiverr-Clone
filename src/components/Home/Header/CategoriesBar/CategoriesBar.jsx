import React from "react";
import { StyledCategoriesBar } from "../../../../styles/Home/CategoriesBar/CategoriesBar";
import { CategoriesNav, CatgoriesList } from "../../../../styles/Home/CategoriesBar/CategoriesNav/CategoriesNav";
import { CategoriesNavItem } from "../../../../styles/Home/CategoriesBar/CategoriesNav/CategoriesNavItem";

export default function CategoriesBar({showCategories}) {
  return (
    <div id="categoriesBar">
      <StyledCategoriesBar className={`${showCategories ?'show':''}`}>
        <CategoriesNav>
          <CatgoriesList>
            <CategoriesNavItem className="firstCategoriesNavItem">Graphics & Design</CategoriesNavItem>
            <CategoriesNavItem>Digital Marketing</CategoriesNavItem>
            <CategoriesNavItem>Writing & Translation</CategoriesNavItem>
            <CategoriesNavItem>Video & Animation</CategoriesNavItem>
            <CategoriesNavItem>Music & Audio</CategoriesNavItem>
            <CategoriesNavItem>Programming & Tech</CategoriesNavItem>
            <CategoriesNavItem>Business</CategoriesNavItem>
            <CategoriesNavItem>Lifestyle</CategoriesNavItem>
            <CategoriesNavItem className="lastCategoriesNavItem">Trending</CategoriesNavItem>
          </CatgoriesList>
        </CategoriesNav>
      </StyledCategoriesBar>
    </div>
  );
}
