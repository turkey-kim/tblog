import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function getMyWriting(authorId: string | undefined, apiEndPoint: string) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndPoint}`,
      { author: authorId },
      { withCredentials: true }
    )
    .catch((error) => {
      console.error(error);
    });
}

export default getMyWriting;
//
