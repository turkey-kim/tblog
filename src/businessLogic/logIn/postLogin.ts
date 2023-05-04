import axios from "axios";
import { NavigateFunction } from "react-router-dom";

function postLogin(id: string, pw: string, navigate: NavigateFunction) {
  axios
    .post(
      "http://localhost:5000/login",
      {
        id: id,
        pw: pw,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      localStorage.setItem("jwt", response.data.token);
      navigate("/");
    })
    .catch((err) => {
      console.log("login error", err);
      console.log("실패");
    });
}

export default postLogin;
