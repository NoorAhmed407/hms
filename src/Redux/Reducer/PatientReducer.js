import * as Actions from "../Actions";

const initialState = {
  selected: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.PATIENT_SELECTED:
      return {
        ...state,
        selected: payload,
      };
  }

  return state;
}
