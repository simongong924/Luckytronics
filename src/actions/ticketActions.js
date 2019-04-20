import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Add Ticket
export const addTicket = (ticketData, history) => dispatch => {
  axios
    .post("/api/users/createTicket", ticketData)
    .then(res => history.push("/signin"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
