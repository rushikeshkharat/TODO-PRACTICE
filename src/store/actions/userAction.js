import axios from "axios";
import {
  USER_REQUEST,
  USER_REQUEST_FAIL,
  USER_REQUEST_SUCCESS,
} from "../constants/userConstants";

export const getAllUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });

    dispatch({ type: USER_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REQUEST_FAIL, payload: error });
  }
};
