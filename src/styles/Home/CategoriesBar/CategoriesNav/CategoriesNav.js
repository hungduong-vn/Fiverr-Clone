import styled from "styled-components";

export const CategoriesNav = styled.nav`
  background-color: #fff;
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  width: 100%;
  overflow: hidden;
  @media only screen and (min-width: 1160px) {
    padding: 0 32px;
  }
`;

export const CatgoriesList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0;
`;
