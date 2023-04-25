import axios from "axios";
import { redirect } from "react-router-dom";

function postLogin(id: string, pw: string) {
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
      redirect("/");
    })
    .catch((err) => {
      console.log("login error", err);
      console.log("실패");
    });
}

export default postLogin;
