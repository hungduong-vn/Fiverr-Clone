import { Form, Button, Input, DatePicker, Select } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../store/actions/user.actions";
import { nations } from "../../../constants/user.const";

export default function SignUpModal({ closeModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    dispatch(setUserAction(values));
    closeModal();
    navigate("/user/1");
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
        validateTrigger="onBlur"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Please enter valid email!",
            },
          ]}
        >
          <Input
            type="email"
            prefix={<MailOutlined className="site-form-item-icon" />}
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
            {
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
              message:
                "Password must have at least 1 special character, 1 number, 1 uppercase letter and 1 lowercase letter",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please input your Confirm Password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Cofirm Password"
          />
        </Form.Item>
        <Form.Item name="birthday">
          <DatePicker
            placeholder="Select your Birthday"
          />
        </Form.Item>
        <Form.Item name="nationality">
          <Select placeholder="Select your Nationality">
            {nations.map((nation, idx) => (
              <Select.Option key={idx} value={nation}>
                {nation}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item className="login-form-btn-item">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
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
  .ant-picker {
    width: 100%;
  }
`;
