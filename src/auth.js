import { apiCatraca, apiCatraca2 } from "./services";
import axios from "axios";

function session() {
  let validar = false;
  const token1 = localStorage.getItem("token1");
  const token2 = localStorage.getItem("token2");

  axios
    .all([
      apiCatraca.post(`session_is_valid.fcgi?session=${token1}`),
      apiCatraca2.post(`session_is_valid.fcgi?session=${token2}`)
    ])
    .then(
      axios.spread((val1, val2) => {
        val1 && val2 === false ? (validar = true) : (validar = false);
      })
    );

  return validar;
}
export default session;
