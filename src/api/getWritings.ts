import { SERVER_API_ADDRESS } from "../constants/link";
import axios from "axios";

function getWritings(apiEndPoint?: string | null) {
  return axios
    .get(`${SERVER_API_ADDRESS}/${apiEndPoint}`, {
      withCredentials: true,
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getWritings;
