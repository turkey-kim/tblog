import { SERVER_API_ADDRESS } from "../constants/link";
import axios from "axios";

function sendUserInfo(
  id?: string | null,
  pw?: string | null,
  apiEndpoint?: string | null
) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndpoint}`,
      {
        id: id,
        pw: pw,
      },
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.error("Failed to send user information", error);
      throw new Error("Failed to send user information");
    });
}

export default sendUserInfo;