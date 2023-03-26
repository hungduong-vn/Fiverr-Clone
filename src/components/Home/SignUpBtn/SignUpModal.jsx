import { Form, Button, Input, DatePicker, Select, Row, Col } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../store/actions/user.actions";
import { nations } from "../../../constants/user.const";
import { signUpApi } from "../../../services/auth";
import { userRole } from "../../../constants/common";
import { emailValidation, usernameValidation } from "./signUp.validation";

export default function SignUpModal({ closeModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const { confirmPassword, ...submitData } = values;
    submitData.role = userRole.user;
    console.log({ submitData });
    const result = await signUpApi(submitData);
    console.log(result);
    const userProfile = result.data.content;
    dispatch(setUserAction(userProfile));
    closeModal();
    navigate(`/user/${result.data.content.name}`);
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
          hasFeedback
          name="name"
          rules={[{ validator: usernameValidation }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="email"
          rules={[{ validator: emailValidation }]}
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
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item
          name="birthday"
          rules={[
            {
              required: true,
              message: "Missing birthday",
            },
          ]}
        >
          <DatePicker placeholder="Select your Birthday" />
        </Form.Item>
        <Row gutter={10}>
          <Col span={13}>
            <Form.Item
              name="nationality"
              rules={[
                {
                  required: true,
                  message: "Missing nationality",
                },
              ]}
            >
              <Select placeholder="Your Nationality">
                {nations.map((nation, idx) => (
                  <Select.Option key={idx} value={nation}>
                    {nation}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Missing gender",
                },
              ]}
            >
              <Select placeholder="Your Gender">
                <Select.Option value={0}>Male</Select.Option>
                <Select.Option value={1}>Female</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

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
