import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../constants/common";
import { styles } from "../../constants/styles";

export default function JobDetailBreadcrumbs({
  serviceName,
  jobCategoryName,
  jobSubCategoryName,
  jobCategoryId,
}) {
  return (
    <Styled>
      <li>
        <Link to={`/categories/${jobCategoryId}`}>{jobCategoryName}</Link>
      </li>
      <i className="breadcrumb-separator fas fa-chevron-right"></i>
      <li>
        <Link to={`/jobs?query=${encodeURIComponent(jobSubCategoryName)}`}>
          {jobSubCategoryName}
        </Link>
      </li>
      <i className="breadcrumb-separator fas fa-chevron-right"></i>
      <li>
        <Link to={`/jobs?query=${encodeURIComponent(serviceName)}`}>
          {serviceName}
        </Link>
      </li>
    </Styled>
  );
}
const Styled = styled.ul`
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;
  .breadcrumb-separator {
    margin: 0 0.5rem;
  }
  li a {
    color: ${styles.colorFiverr};
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: ${breakpoints.medium}px) {
    li a {
      font-size: 1rem;
    }
    .breadcrumb-separator {
      margin: 0 1rem;
    }
  }
`;
