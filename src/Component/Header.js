import React from "react";
import { Badge, Button, PageHeader } from "antd";
import { useDispatch } from "react-redux";
import { PATIENT_SELECTED, PATIENT_LOGOUT } from "../Redux/Actions";

function Header(props) {
  const dispatch = useDispatch();

  const onSetPatientSelected = (data) => {
    dispatch({
      type: PATIENT_SELECTED,
      payload: data,
    });
  };

  const onLogout = () => {
    dispatch({
      type: PATIENT_LOGOUT,
    });
  };

  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="HMS"
          subTitle="Solution For Hospital"
          extra={[
            <Button key="3" onClick={() => onSetPatientSelected("BA")}>
              Book Appointment
            </Button>,
            <Badge size={"default"} count={4}>
              <Button key="2" onClick={() => onSetPatientSelected("MA")}>
                My Appointments
              </Button>
            </Badge>,
            <Button key="1" type="primary" onClick={() => onLogout()}>
              Logout
            </Button>,
          ]}
        ></PageHeader>
      </div>
    </div>
  );
}

export default Header;
