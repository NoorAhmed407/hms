import { Col, Row } from "antd";
import React from "react";
import AppointmentCard from "./Card";

function MyAppoitments(props) {
  return (
    <div className="container">
      <Row gutter={16}>
        <Col span={6}>
          <AppointmentCard />
        </Col>

        <Col span={6}>
          <AppointmentCard />
        </Col>
        <Col span={6}>
          <AppointmentCard />
        </Col>
        <Col span={6}>
          <AppointmentCard />
        </Col>
      </Row>
    </div>
  );
}

export default MyAppoitments;
