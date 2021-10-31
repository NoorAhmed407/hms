import AuthReducer from "./AuthReducer";
import PatientReducer from "./PatientReducer";
import AdminReducer from "./AdminReducer";
import { combineReducers } from "redux";

export default combineReducers({
  patient: PatientReducer,
  admin: AdminReducer,
  auth: AuthReducer,
});
