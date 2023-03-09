import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";
import { styles } from "../../../constants/styles";
export default function AddToWishList({ added }) {
  const [isAdded, setIsAdded] = useState(added);
  const handleClick = () => {
    console.log(isAdded);
    setIsAdded(!isAdded);
  };
  return (
    <Styled onClick={handleClick}>
      {isAdded ? (
        <HeartFilled className="heart-filled" />
      ) : (
        <HeartOutlined className="heart-outline" />
      )}
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  .heart-filled svg {
    fill: ${styles.colorLove};
  }
  .heart-outline:hover svg {
    fill: ${styles.colorLove};
  }
`;
