import { useEffect, useState } from "react";
import { authWithToken } from "../../api/auth";

function useTokenChecker() {
  let [isTokenValid, setIsTokenValid] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  const apiEndpoint = "api/check_token";

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    async function sendToken() {
      const response = await authWithToken(token, apiEndpoint);
      if (response.tokenValidity) {
        console.log("갱신결과 : " + response.data.tokenValidity);
        setIsLoading(false);
        setIsTokenValid(true);
      } else if (!response.tokenValidity) {
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
