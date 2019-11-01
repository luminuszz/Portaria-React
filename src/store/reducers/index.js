import { combineReducers } from "redux";
import handleForm from "./form";
import tableInfo from "./tableNavbar";

export default combineReducers({
  handleForm,
  tableInfo
});
