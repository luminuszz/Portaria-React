const INITIAL_STATE = {
  data: [
    {
      tableName: "Tabela",
      url: "nulo",
      object: "nulo"
    }
  ]
};

export default function tableInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INFO_REQ":
      return {
        data: [
          {
            tableName: action.tableName,
            url: action.url,
            object: action.object
          }
        ]
      };

    default:
  }
  return state;
}
