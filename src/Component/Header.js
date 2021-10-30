import React from "react";
import { Button, Descriptions, PageHeader } from "antd";

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
            <Button key="3">Book Appointment</Button>,
            <Button key="2">My Appointment</Button>,
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
