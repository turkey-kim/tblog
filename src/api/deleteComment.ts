import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function deleteComment(apiEndpoint: string, commentId: string | undefined) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndpoint}`,
      { commentId: commentId },
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.error(error);
    });
}

export default deleteComment;
