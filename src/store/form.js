import { createStore } from "react-redux";

const INITIAL_STATE = {
  data: {
    nome: "",
    sobrenome: "",
    empresa: ""
  }
};

function handleForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HANDLE_FORM":
      return {
        data: {
          nome: action.name,
          sobrenome: action.sobrenome,
          empresa: action.empresa
        }
      };

    default:
      return state;
  }
}
const store = createStore(handleForm);

export default store;
