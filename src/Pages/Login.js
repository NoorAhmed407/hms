import { Typography } from "antd";
import React from "react";
import FormLogin from "../Component/FormLogin";

function Login(props) {
  return (
    <div>
      <Typography.Title level={1}>Login</Typography.Title>
      <FormLogin />
    </div>
  );
}

export default Login;
