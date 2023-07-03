import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function editComment(
  apiEndpoint: string | undefined,
  commentId: string | undefined,
  content: string | undefined,
  date: string | undefined
) {
  return axios.post(
    `${SERVER_API_ADDRESS}/${apiEndpoint}`,
    {
      commentId: commentId,
      content: content,
      date: date,
    },
    {
      withCredentials: true,
    }
  );
}

export default editComment;
