import * as actionTypes from "./actionTypes";

import axios from "axios";

export const postForm = form => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/alias/", form)
      .then(() => dispatch({ type: actionTypes.POST_FORM, payload: "Success" }))
      .catch(err =>
        dispatch({
          type: actionTypes.POST_FORM,
          payload: "Invalid Fields"
        })
      );
  };
};
