const INITIAL_STATE = {
  data: {
    nome: "",
    sobrenome: "",
    empresa: ""
  }
};

export default function handleForm(state = INITIAL_STATE, action) {
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
