import * as actionTypes from "../actions/actionTypes";

const initialState = {
  people: []
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload
      };
    case actionTypes.SUBMIT_PERSON:
      return {
        ...state,
        people: [action.payload, ...state.people]
      };
    default:
      return state;
  }
};

export default peopleReducer;
