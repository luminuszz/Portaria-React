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
export function acessLogs() {
  return {
    type: "INFO_REQ",
    tableName: "Logs",
    url: "logs",
    object: "logs"
  };
}
