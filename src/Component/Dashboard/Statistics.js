import React from "react";
import { Statistic, Row, Col } from "antd";

function Statistics(props) {
  return (
    <div>
      <Row gutter={16}>
        <Col
          span={12}
          className="bg-success text-center shadow-lg p-3 mb-5"
          style={{ borderRadius: 30 }}
        >
          <Statistic
            title="Total Users"
            value={1128}
            valueStyle={{ color: "white" }}
          />
        </Col>
        <Col
          span={12}
          className="bg-warning text-center shadow-lg p-3 mb-5"
          style={{ borderRadius: 30 }}
        >
          <Statistic
            title="Total Doctors"
            value={93}
            valueStyle={{ color: "white" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Statistics;
