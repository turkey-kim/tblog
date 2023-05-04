import { useEffect, useState } from "react";
import axios from "axios";

function useTokenChecker() {
  let [isTokenValid, setIsTokenValid] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

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
              setIsLoading(false);
              setIsTokenValid(true);
            } else if (!response.data.tokenValidity) {
              console.log("갱신결과 : " + response.data.tokenValidity);
              setIsLoading(false);
              setIsTokenValid(false);
            }
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      setIsLoading(false);
      setIsTokenValid(false);
    }
  }, [isLoading, isTokenValid]);

  return [isTokenValid, isLoading];
}

export default useTokenChecker;
