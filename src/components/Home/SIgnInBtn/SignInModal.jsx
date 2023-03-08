import { Form, Button, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { signInApi } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../store/actions/user.actions";

export default function SignInModal({closeModal}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(null);
  const onFinish = async (values) => {
    try {
      const result = await signInApi(values);
      const userInfo = result.data.content;
      dispatch(setUserAction(userInfo));
      console.log(result);
      setShowError(false);
      closeModal();
      message.success(`Welcome back ${userInfo.name}`);
      navigate(`/user/${userInfo.id}`);
    } catch (error) {
      setShowError(true);
    }
  };
  return (
    <Styled>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {showError && (
          <p className="text-danger">(*) Incorrect Email and Password!</p>
        )}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Please enter valid email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className="login-form-btn-item">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Styled>
  );
}

const Styled = styled.div`
  .login-form {
    max-width: 350px;
  }
  .login-form-button {
    width: 100%;
  }
`;
