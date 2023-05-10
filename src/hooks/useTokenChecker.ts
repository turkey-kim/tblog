import { useEffect, useState } from "react";
import tokenAuthorization from "../api/authWithToken";

function useTokenChecker() {
  let [isTokenValid, setIsTokenValid] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  const apiEndpoint = "api/check_token";

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    async function sendToken() {
      const response = await tokenAuthorization(token, apiEndpoint);
      if (response.data.tokenValidity) {
        console.log("갱신결과 : " + response.data.tokenValidity);
        setIsLoading(false);
        setIsTokenValid(true);
      } else if (!response.data.tokenValidity) {
        console.log("갱신결과 : " + response.data.tokenValidity);
        setIsLoading(false);
        setIsTokenValid(false);
      }
    }
    if (token) {
      sendToken();
    } else {
      setIsLoading(false);
      setIsTokenValid(false);
    }
  }, [isLoading, isTokenValid]);

  return [isTokenValid, isLoading];
}

export default useTokenChecker;
