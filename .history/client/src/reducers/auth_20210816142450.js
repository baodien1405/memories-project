import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH: {
      console.log(action?.payload);
      return state;
    }
    default:
      return state;
  }
};
