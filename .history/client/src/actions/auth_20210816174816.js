import * as api from "./../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // handle user signin here
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // handle user signup here
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
