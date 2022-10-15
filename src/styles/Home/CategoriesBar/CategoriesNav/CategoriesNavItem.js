import styled from "styled-components";

export const CategoriesNavItem = styled.li`
  padding-left: 1.875rem;
  display: inline-block;
  flex-shrink: 0;
  padding: 0 10px;
  position: relative;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  &.firstCategoriesNavItem{
    padding-left: 0;
  }
  &.lastCategoriesNavItem{
    padding-right: 0;
  }
`;
