import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  padding: 20px 32px;
  position: absolute;
  left: -20;
  right: auto;
  border: 1px solid #e4e5e7;
  box-shadow: 0 1px 3px #dadbdd;
  background-color: #fff;
  z-index: 100;
  h3 {
    font-size: 1rem;
    padding-bottom: 10px;
  }
  .category-group{
    width: 248px;
    padding-top: 1rem;
    &:first-of-type{
      padding-top: 0;
    }
  }
`;

export default function CategoriesHover({ categoryList }) {
  return (
    <Styled>
      {categoryList.map((ele, idx) => {
        return (
          <div key={idx} className="category-group">
            <h3>{ele.job_subcat_name}</h3>
            {ele.service_list.map((subCategory, subIdx) => (
              <div key={subIdx}>{subCategory.service_name}</div>
            ))}
          </div>
        );
      })}
    </Styled>
  );
}
