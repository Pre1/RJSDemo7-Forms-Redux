// ========================= BLOCK 01 (EMPTY FORM) ========================= \\
class ControlledForm extends Component {
  submission(e) {
    // e.preventDefault();        with and without this line
    alert("Hello class.");
  }

  render() {
    return (
      <form onSubmit={this.submission.bind(this)}>
        <input type="submit" />
      </form>
    );
  }
}

// ========================= BLOCK 02 (INPUT FIELDS) ========================= \\
class ControlledForm extends Component {
  submission(e) {
    e.preventDefault()
    alert("Hello class.")
  }

  render() {
    return (
      <form onSubmit={this.submission.bind(this)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <input
            type="text"
            className="form-control"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">E-Mail*</span>
          </div>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

// ========================= BLOCK 03 (ALERTS INPUT FIELD VALUES) ========================= \\
class ControlledForm extends Component {
  constructor() {
    super()
    this.state = {
      alias: "",
      description: "",
      email: ""
    }
  }

  textChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submission(e) {
    e.preventDefault()
    alert(`ALIAS: ${this.state.alias}\nDESCRIPTION: ${this.state.description}\nEMAIL: ${this.state.email}`)
  }

  render() {
    return (
      <form onSubmit={this.submission.bind(this)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="alias"
            onChange={this.textChange.bind(this)}
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
            onChange={this.textChange.bind(this)}
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
            onChange={this.textChange.bind(this)}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

// ========================= BLOCK 04 (STORE + SUBMISSION WITHOUT ERROR HANDLING) ========================= \\
// Create `AliasStore.js`

import { decorate, observable } from "mobx";
import axios from "axios";


class AliasStore {
  constructor() {
    this.alias = "";
    this.description = "";
    this.email = "";
  }

  submitToBackend(data) {
    axios.post("http://127.0.0.1:8000/alias/", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err.response.data)
      })
  }
}

decorate(AliasStore, {
  alias: observable,
  description: observable,
  email: observable,
  errors: observable
});

export default new AliasStore();

// --------------------------------
import aliasStore from './AliasStore';

class ControlledForm extends Component {
  constructor() {
    super()
    this.state = {
      alias: "",
      description: "",
      email: ""
    }
  }

  textChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submission(e) {
    e.preventDefault();
    aliasStore.submitToBackend(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submission.bind(this)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="alias"
            onChange={this.textChange.bind(this)}
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
            onChange={this.textChange.bind(this)}
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
            onChange={this.textChange.bind(this)}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

// ========================= BLOCK 05 (ERROR HANDLING) ========================= \\
class AliasStore {
  constructor() {
    this.alias = "";
    this.description = "";
    this.email = "";
    this.errors = {};
  }

  submitToBackend(data) {
    axios.post("http://127.0.0.1:8000/alias/", data)
      .then(res => {
        this.errors = {};
        console.log(res);
      })
      .catch(err => {
        this.errors = err.response.data;
        console.error(err.response.data)
      })
  }
}

decorate(AliasStore, {
  alias: observable,
  description: observable,
  email: observable,
  errors: observable
});

export default new AliasStore();
// --------------------------------

class ControlledForm extends Component {
  constructor() {
    super()
    this.state = {
      alias: "",
      description: "",
      email: ""
    }
  }

  textChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submission(e) {
    e.preventDefault();
    aliasStore.submitToBackend(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submission.bind(this)}>
        {aliasStore.errors.alias && <span class="badge badge-danger">{aliasStore.errors.alias[0]}</span>}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="alias"
            onChange={this.textChange.bind(this)}
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
            onChange={this.textChange.bind(this)}
          />
        </div>

        {aliasStore.errors.email && <span class="badge badge-danger">{aliasStore.errors.email[0]}</span>}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">E-Mail*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={this.textChange.bind(this)}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}