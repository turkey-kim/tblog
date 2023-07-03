import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function getComments(apiEndPoint?: string | null, pageNumber?: string | null) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndPoint}`,
      {
        pageNumber: pageNumber,
      },
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.log(error);
    });
}

export default getComments;
