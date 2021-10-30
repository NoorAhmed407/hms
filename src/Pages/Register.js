import { Typography } from "antd";
import React from "react";
import RegisterForm from "../Component/RegisterForm";

function Login(props) {
  return (
    <div>
      <Typography.Title level={1}>Register</Typography.Title>
      <RegisterForm />
    </div>
  );
}

export default Login;
