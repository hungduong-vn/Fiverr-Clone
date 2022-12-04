import React from "react";
import styled from "styled-components";
import CategoriesService from "./CategoriesService";

const Styled = styled.div`
  padding: 20px 32px;
  position: absolute;
  top: 0;
  right: auto;
  border: 1px solid #e4e5e7;
  box-shadow: 0 1px 3px #dadbdd;
  background-color: #fff;
  z-index: 100;
  display: grid;
  max-width: 1000px;
  /* flex-wrap: wrap; */
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  &.right {
    right: 0;
    left: auto;
  }
  h3 {
    font-size: 1rem;
    padding-bottom: 10px;
  }
  .category-group {
    width: 248px;
    /* padding-top: 1rem; */
    &:first-of-type {
      padding-top: 0;
    }
  }
`;

export default function CategoriesHover({ categoryList, right }) {
  return (
    <Styled className={right && "right"}>
      {categoryList.slice(0, 4).map((ele, idx) => {
        return (
          <div key={idx} className="category-group">
            <h3>{ele.name}</h3>
            {ele.service.map((subCategory, subIdx) => (
              <CategoriesService
                key={subIdx}
                name={subCategory.name}
              ></CategoriesService>
            ))}
          </div>
        );
      })}
    </Styled>
  );
}
