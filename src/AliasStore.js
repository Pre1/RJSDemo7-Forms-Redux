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