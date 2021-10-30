import React from "react";
import { Input } from "antd";

const InputField = ({ size, icon, placeholder, name, type, onChange }) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      name={name}
      type={type}
      prefix={icon}
      onChange={onChange}
    />
  );
};

export default InputField;
