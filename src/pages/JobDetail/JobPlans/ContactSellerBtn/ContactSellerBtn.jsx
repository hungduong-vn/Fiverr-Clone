import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../constants/common";
import { styles } from "../../../../constants/styles";

export default function ContactSellerBtn({ innerText }) {
  return (
    <Styled className="contact-seller-btn-wrapper">
      <button className="contact-seller-btn">
        {innerText || "Contact Seller"}
      </button>
    </Styled>
  );
}
const Styled = styled.div`
  padding: 1.5rem;
  .contact-seller-btn {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    color: ${styles.colorPrimary};
    border: 1px solid ${styles.colorPrimary};
    font-weight: bold;
    &:hover {
      background-color: ${styles.colorPrimary};
      color: #fff;
    }
  }
  @media screen and (min-width: ${breakpoints.large}px) {
    margin-top: 1rem;
    background-color: #fafafa;
  }
`;
