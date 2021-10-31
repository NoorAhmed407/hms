import { DatePicker, Typography } from "antd";
import React from "react";

function onChange(date, dateString) {
  console.log(date, dateString);
}

function DatePickerComponent(props) {
  return (
    <div>
      <Typography.Text style={{ textAlign: "left" }}>
        {props.label}
      </Typography.Text>
      <DatePicker onChange={onChange} style={{ width: "100%" }} />
    </div>
  );
}

export default DatePickerComponent;
