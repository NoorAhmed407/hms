import { Form, Input, Button, Checkbox, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const FormLogin = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="m-5">
      <Typography.Title>Login</Typography.Title>
      <div className="my-2">
        <InputField
          name={"email"}
          type={"email"}
          placeholder={"Enter Email"}
          onChange={() => {}}
        />
      </div>
      <div className="my-2">
        <InputField
          name={"password"}
          type={"password"}
          placeholder={"Enter Password"}
          onChange={() => {}}
        />
      </div>
      <div className="my-2">
        <Link to="/register">SignUp</Link>
      </div>
      <div className="my-2">
        <Button type="primary">Login</Button>
      </div>
    </div>
  );
};

export default FormLogin;
