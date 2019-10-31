import { createStore } from "redux";

const INITIALSTATE = {
  requisition: [],
  tempReq: "",
  typeReq: ""
};

function reducer(state = INITIALSTATE, action) {
  return state;
}

const store = createStore(reducer);

export default store;
