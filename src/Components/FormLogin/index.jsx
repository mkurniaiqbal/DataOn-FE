import React from "react";
import { Form, Input, Col, Row, Checkbox, Button } from "antd";

function FormLogin() {
  const onFinish = () => {};

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
          name="Username"
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
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
          <Input.Password />
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
