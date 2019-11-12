import { dispatch } from "../../../../../Users/davic/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/range";
import axios from "axios";

export function userRedicrect() {
  return {
    type: "INFO_REQ",
    tableName: "Usuários",
    url: "usuario",
    object: "usuario"
  };
}
export function empreRedicrect() {
  return {
    type: "INFO_REQ",
    tableName: "Empresas",
    url: "empresa",
    object: "empresa"
  };
}

export const testeThunk = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      console.log(response.data);
      dispatch(empreRedicrect());
    });
  };
};

export function acessLogs() {
  return {
    type: "INFO_REQ",
    tableName: "Logs",
    url: "logs",
    object: "logs"
  };
}
