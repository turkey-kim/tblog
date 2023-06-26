import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function postComment(
  apiEndpoint: string,
  author: string | undefined,
  content: string | null,
  date: string
) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndpoint}`,
      {
        author: author,
        content: content,
        date: date,
      },
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.error(error);
    });
}

export default postComment;
