import React from "react";
import { Badge, Button, Descriptions, PageHeader } from "antd";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="HMS"
          subTitle="Solution For Hospital"
          extra={[
            <Link to="/bookappointment">
              <Button key="3">Book Appointment</Button>
            </Link>,
            <Link to="/myappointment">
              <Badge size={"default"} count={4}>
                <Button key="2">My Appointments</Button>
              </Badge>
            </Link>,
            <Button key="1" type="primary">
              Logout
            </Button>,
          ]}
        ></PageHeader>
      </div>
    </div>
  );
}

export default Header;
