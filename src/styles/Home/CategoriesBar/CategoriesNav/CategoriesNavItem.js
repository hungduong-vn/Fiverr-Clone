import styled from "styled-components";

export const CategoriesNavItem = styled.li`
  padding-left: 1.875rem;
  display: inline-block;
  flex-shrink: 0;
  padding: 0 10px;
  position: relative;
  font-size: 1rem;
  color: #62646a;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  &.firstCategoriesNavItem {
    @media only screen and (min-width: 600px) {
      padding-left: 30px;
    }
    @media only screen and (min-width: 1160px) {
      padding-left: 0;
    }
  }
  &.lastCategoriesNavItem {
    @media only screen and (min-width: 600px) {
      padding-right: 30px;
    }
    @media only screen and (min-width: 1160px) {
      padding-right: 0;
    }
  }
`;
