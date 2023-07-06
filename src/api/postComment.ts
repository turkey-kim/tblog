import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function postComment(
  apiEndpoint: string,
  pageNumber: string | undefined,
  user: string | undefined,
  content: string | undefined,
  date: string | undefined,
  parentId?: string | undefined
) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndpoint}`,
      {
        pageNumber: pageNumber,
        user: user,
        content: content,
        date: date,
        parentId: parentId,
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
