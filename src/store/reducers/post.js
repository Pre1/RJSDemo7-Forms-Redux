import * as actionTypes from "../actions/actionTypes";

const initialState = {
  statusMessage: ""
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_FORM:
      return {
        ...state,
        statusMessage: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
