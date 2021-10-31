import { Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import AppointmentForm from "../Component/BookAppointment/AppointmentForm";
import Header from "../Component/Header";
import MyAppoitments from "../Component/MyAppointments/MyAppoitments";

function Home(props) {
  const patient = useSelector((state) => state.patient);
  return (
    <div>
      <Header />
      <div className="my-5">
        {patient?.selected == "" ? (
          <>
            <Typography.Title className="text-center">Home</Typography.Title>
          </>
        ) : patient?.selected == "BA" ? (
          <>
            <Typography.Title className="text-center">
              Book Appointment
            </Typography.Title>
            <AppointmentForm />
          </>
        ) : (
          patient?.selected == "MA" && (
            <>
              <Typography.Title className="text-center">
                My Appointment
              </Typography.Title>
              <MyAppoitments />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
