import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

function RegisterForm(props) {
  return (
    <div className="m-5">
      <Typography.Title>Register</Typography.Title>
      <div className="my-2">
        <InputField
          name={"name"}
          type={"text"}
          placeholder={"Enter Name"}
          onChange={() => {}}
        />
      </div>
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
        <InputField
          name={"address"}
          placeholder={"Enter Address"}
          onChange={() => {}}
        />
      </div>
      <div className="my-2">
        <Link to="/login">SignIn</Link>
      </div>
      <div className="my-2">
        <Button type="primary">Register</Button>
      </div>
    </div>
  );
}

export default RegisterForm;
