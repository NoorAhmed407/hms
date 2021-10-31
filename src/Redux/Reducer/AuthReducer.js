import { PATIENT_LOGOUT } from "../Actions";

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PATIENT_LOGOUT:
      return {
        ...state,
        user: null,
      };
  }

  return state;
}
