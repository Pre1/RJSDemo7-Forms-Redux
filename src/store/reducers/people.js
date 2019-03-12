import * as actionTypes from "../actions/actionTypes";

const initialState = {
  people: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
