import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllUsers());
    navigate("/");
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response:', error.response.status, error.response.statusText);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else happened in setting up the request
      console.error('Error setting up request:', error.message);
    }
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response:', error.response.status, error.response.statusText);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else happened in setting up the request
      console.error('Error setting up request:', error.message);
    }
  }
};
