import React from "react";
import styled from "styled-components";

export default function AboutThisSellerInfo({
  nationality,
  created_at,
  languages,
}) {
  return (
    <Styled>
      <li>
        <div className="seller-info-label">From</div>
        <div className="seller-info-value">{nationality}</div>
      </li>
      <li>
        <div className="seller-info-label">Member Since</div>
        <div className="seller-info-value">{created_at}</div>
      </li>
      <li>
        <div className="seller-info-label">Avg. Response time</div>
        <div className="seller-info-value">1 hour</div>
      </li>
      <li>
        <div className="seller-info-label">Last delivery</div>
        <div className="seller-info-value">N/A</div>
      </li>
      <li>
        <div className="seller-info-label">Languages</div>
        <div className="seller-info-value">
          {languages.map((language, idx) => {
            const separator = idx > 0 ? ", " : "";
            return separator + language.name;
          })}
        </div>
      </li>
    </Styled>
  );
}

const Styled = styled.ul`
  display: grid;
  font-size: 1rem;
  grid-template-columns: 1fr 1fr;
  li {
    padding-bottom: 1rem;
    &:last-of-type {
      padding-bottom: 0;
    }
  }
  .seller-info-value {
    font-weight: bold;
  }
`;
