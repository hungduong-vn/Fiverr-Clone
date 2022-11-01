import React from "react";
import styled from "styled-components";
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

export default function JobsItemFoot({ price }) {
  return (
    <Styled>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path>
      </svg>

      <div className="jobs-price">
        STARTING AT <span>${price}</span>
      </div>
    </Styled>
  );
}
