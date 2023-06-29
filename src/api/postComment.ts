import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function postComment(
  apiEndpoint: string,
  id: string | undefined,
  user: string | undefined,
  content: string | undefined,
  date: string
) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndpoint}`,
      {
        id: id,
        user: user,
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
