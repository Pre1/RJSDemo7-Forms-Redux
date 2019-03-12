import * as actionTypes from "./actionTypes";

import axios from "axios";

export const fetchPeople = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/alias/");
      const people = res.data;
      dispatch({
        type: actionTypes.FETCH_PEOPLE,
        payload: people
      });
    } catch (error) {
      console.error("Something went wrong while fetching people");
      console.error(error);
    }
  };
};

export const submitPerson = data => {
  return async dispatch => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/alias/", data);
      dispatch({
        type: actionTypes.SUBMIT_PERSON
      });
    } catch (error) {
      console.error("Person did not submit!");
      console.error(error);
    }
  };
};
