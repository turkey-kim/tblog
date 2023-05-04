import { useEffect, useState } from "react";
import axios from "axios";

function useTokenChecker() {
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token) {
      try {
        axios
          .get("http://localhost:5000/api/check_token", {
            headers: {
              Authorization: token,
            },
            withCredentials: true,
          })
          .then((response) => {
            if (response.data.tokenValidity) {
              console.log("갱신결과 : " + response.data.tokenValidity);
              setIsTokenValid(true);
            } else if (!response.data.tokenValidity) {
              console.log("갱신결과 : " + response.data.tokenValidity);
              setIsTokenValid(false);
            }
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("로그인하세요");
    }
  }, []);

  return [isTokenValid];
}

export default useTokenChecker;
