import { SERVER_API_ADDRESS } from "../constants/link";
import axios from "axios";

function getOneWriting(id: any, apiEndPoint?: string | null) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndPoint}`,
      {
        id: parseInt(id),
      },
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.error(error);
    });
}

export default getOneWriting;
