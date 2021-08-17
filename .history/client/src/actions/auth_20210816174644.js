import * as api from "./../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // handle user login here
    const { data } = await api.signIn(formData);

    dispatch({ type: "AUTH", payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = () => async (dispatch) => {
  try {
    // handle user login here
  } catch (error) {
    console.log(error);
  }
};
