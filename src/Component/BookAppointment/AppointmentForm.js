import { Button } from "antd";
import React from "react";
import DatePickerComponent from "../DatePicker";
import PickerComponent from "../PickerComponent";

function AppointmentForm(props) {
  return (
    <div className="container">
      <div className="my-2">
        <DatePickerComponent label={"Select Date"} />
      </div>
      <div className="my-2">
        <PickerComponent label={"Select Doctor"} />
      </div>
      <div className="my-5">
        <Button type={"primary"} block>
          Book
        </Button>
      </div>
    </div>
  );
}

export default AppointmentForm;
