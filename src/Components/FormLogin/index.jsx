import React, { useState } from "react";
import { Form, Input, Col, Row, Checkbox, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormLogin() {
  const navigate = useNavigate();

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onFinish = async () => {
    const post = {
      username: formValues.username,
      password: formValues.password,
    };
    try {
      const res = await axios.post(
        "http://192.168.1.33:8080/api/auth/signin",
        post
      );
      localStorage.setItem("roles", res.data.roles);
      navigate("/");
      message.success("Login berhasil");
    } catch {
      message.error("Username atau Password salah");
    }
  };

  const onFinishFailed = () => {};
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              type: "string",
              max: 12,
            },
            {
              pattern: new RegExp(/^[a-zA-Z 0-9]+$/i),
              message: "Username must be alphabets and numbers only",
            },
          ]}
        >
          <Input
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              type: "string",
              min: 8,
            },
          ]}
        >
          <Input.Password
            name="password"
            value={formValues.username}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Row justify="space-between">
            <Col>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col>
              <a className="login-form-forgot">Forgot password</a>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: 150 }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormLogin;
