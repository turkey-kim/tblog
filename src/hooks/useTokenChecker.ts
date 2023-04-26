import axios from "axios";
import { useState } from "react";

function useTokenChecker() {
  const token = localStorage.getItem("jwt");
  const [tokenValid, setTokenValid] = useState(false);

  axios
    .get("http://localhost:5000/api/check_token", {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.tokenValidity) {
        console.log("토큰인증성공");
        setTokenValid(true);
      } else {
        console.log("토큰인증실패");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return [tokenValid];
}

export default useTokenChecker;
