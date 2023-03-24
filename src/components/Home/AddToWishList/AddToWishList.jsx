import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";
import { styles } from "../../../constants/styles";
import { useSelector } from "react-redux";
import {
  addLovedJob,
  getLovedJob,
  removeLovedJob,
} from "../../../services/job";
import { message } from "antd";
message.config({
  maxCount: 2,
});
export default function AddToWishList({ jobId }) {
  const { userInfo } = useSelector((state) => state.userReducer);
  const [isAdded, setIsAdded] = useState(false);
  const fetchLovedJob = async () => {
    const result = await getLovedJob({ userId: userInfo.id, jobId });
    const added = !!result.data.content;
    setIsAdded(added);
  };
  useEffect(() => {
    if (userInfo) {
      console.log("Re-render");
      fetchLovedJob();
    }
  });
  const { signInModal } = useSelector((state) => state.viewReducer);
  const handleClick = async () => {
    console.log({ jobId, isAdded });
    // Check Logged In
    if (userInfo) {
      // If yes -> call API addLovedJob
      if (!isAdded) {
        try {
          await addLovedJob(userInfo.id, jobId);
          message.success("Added to favorites!");
          setIsAdded(true);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await removeLovedJob(userInfo.id, jobId);
          message.success("Removed from favorites!");
          setIsAdded(false);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      // no -> open signUpModal
      message.info("Please sign in first", 2);
      signInModal.open();
    }
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
  cursor: pointer;
  .heart-filled svg {
    fill: ${styles.colorLove};
  }
  .heart-outline:hover svg {
    fill: ${styles.colorLove};
  }
`;
