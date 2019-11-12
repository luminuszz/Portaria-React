import { all } from "redux-saga/effects";
import addToName from "./form";

export default function* rootSaga() {
  yield all([addToName]);
}
