import React, { useState } from "react";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { breakpoints } from "../../../constants/common";
import { styles } from "../../../constants/styles";
import { message } from "antd";
import { updateUser } from "../../../services/user";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../../store/actions/user.actions";

export default function EditDisplayName() {
  const {
    userInfo: { display_name: displayName },
  } = useSelector((state) => state.userReducer);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let { value } = e.target;
    value = value.trim();
    setEditValue(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editValue) {
      const submitData = { data: { display_name: editValue } };
      try {
        const result = await updateUser(submitData);
        console.log({ result });
        dispatch(updateUserAction(result.data.content));
        message.success(
          <>
            Updated your display name to <b>{editValue}</b>
          </>
        );
        setEditValue("");
      } catch (error) {
        console.log(error);
      }
    }
    setEdit(false);
  };
  return (
    <Styled className="user-info-display-name pt-3">
      {edit ? (
        <form className="display-name-input">
          <span className="separator"></span>
          <input
            placeholder={displayName}
            onChange={handleChange}
            maxLength={12}
          />
          <button type="submit" className="edit-icon" onClick={handleSubmit}>
            <CheckOutlined className="edit-finish" />
          </button>
        </form>
      ) : (
        <div className="display-name-show">
          <span className="separator"></span>
          {displayName ? displayName : "Add display name"}
          <button onClick={() => setEdit(true)} className="edit-icon">
            <EditOutlined />
          </button>
        </div>
      )}
    </Styled>
  );
}
const Styled = styled.div`
  width: 100%;
  input {
    font-size: 1rem;
    font-weight: 700;
  }
  .display-name-input {
    display: flex;
    input {
      border: none;
      text-align: center;
      border-bottom: 1px solid ${styles.colorPrimary};
      padding: 0;
      &:focus {
        outline: none;
        border-bottom: 1px solid ${styles.colorFiverr};
      }
    }
  }
  .display-name-show {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    width: 100%;
  }
  .edit-icon {
    cursor: pointer;
    padding-left: 1rem;
    color: ${styles.colorPale};
    &:hover {
      color: ${styles.colorFiverr};
    }
  }
  .separator {
    width: 40px;
    height: 24px;
  }
  @media screen and (min-width: ${breakpoints.large}px) {
    &,
    input {
      font-size: 1.5rem;
    }
  }
`;
