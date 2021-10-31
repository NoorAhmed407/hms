import * as Actions from "../Actions";

const initialState = {
  selected: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  return state;
}
