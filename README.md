# RJSDemo8 - Forms

[Slides](https://docs.google.com/presentation/d/1VNDFN2oIkKLUpKRZ7hkiRjyJTv3d7-Lp6eZJPZn2P5E/edit?usp=sharing)

1. Clone and [backend](https://github.com/lailalelouch/RJS) and run the server
2. Add the form in `ControlledForm.js`

```jsx
render() {
  return (
    <form>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Alias*</span>
        </div>
        <input
          type="text"
          className="form-control"
          name="alias"
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Description</span>
        </div>
        <input
          type="text"
          className="form-control"
          name="description"
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">E-Mail*</span>
        </div>
        <input
          type="text"
          className="form-control"
          name="email"
        />
      </div>
      <input type="submit" /> <br />
    </form>
  );
}
```

3. Bind the form inputs to state.
   Things to explain:
   _ State keys have to match backend
   _ What is `e`? How does it work?

```javascript
class ControlledForm extends Component {
    state = {
        alias: "",
        description: "",
        email: ""
    }

    textChange = (e) => this.setState({ [e.target.name]: e.target.value });
```

4. In `actions/post.js` create the form action to be dispatched

```javascript
import * as actionTypes from "./actionTypes";
import axios from "axios";

export const submitForm = data => {
  return async dispatch => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/alias/", data);
      dispatch({
        type: actionTypes.POST_FORM,
        payload: "Success"
      });
    } catch (error) {
      dispatch({
        type: actionTypes.POST_FORM,
        payload: "Invalid Fields"
      });
    }
  };
};
```

5. Submit the form

Add the `onSubmit` in the form tag

```javascript
import { connect } from "react-redux";
import * as actionCreatores from "./store/actions/index";
...
    submit = (e) => {
        e.preventDefault();
        this.props.submitForm(this.state);
    }
...
    <form onSubmit={this.submit}>
        ...
    </form>

...

const mapDispatchToProps = dispatch => {
    return {
        submitForm: data => dispatch(actionCreatores.submitForm(data))
    };
};

...
```

6. In `reducers/post.js`, handle the incoming action:

```javascript
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
```

7. Displaying the status message

In `ControlledForm.js`

```javascript
const mapStateToProps = state => {
    return {
        statusMessage: state.statusMessage
    };
};

...
{this.props.statusMessage}
```
