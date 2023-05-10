import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function authWithToken(token?: string | null, apiEndpoint?: string) {
  return axios
    .get(`${SERVER_API_ADDRESS}/${apiEndpoint}`, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })
    .catch((error) => {
      console.error("Failed to authorize with token", error);
      throw new Error("Failed to authorize with token");
    });
}

export default authWithToken;
