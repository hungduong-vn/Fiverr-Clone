import React from "react";
import styled from "styled-components";
import AddToWishList from "../../../../components/Home/AddToWishList/AddToWishList";
import { styles } from "../../../../constants/styles";

const Styled = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: #b5b6ba;
    font-size: 1rem;
  }
  .jobs-price {
    font-size: 10px;
    color: ${styles.colorSecondary};
    font-weight: 700;
    span {
      font-size: 18px;
      color: #000;
      font-weight: 400;
    }
  }
`;

export default function JobsItemFoot({ price, jobId }) {
  return (
    <Styled>
      <AddToWishList jobId={jobId} />
      <div className="jobs-price">
        STARTING AT <span>${price}</span>
      </div>
    </Styled>
  );
}
