import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function editWriting(
  id: string | undefined,
  title: string,
  author: string | undefined,
  content: string | null,
  date: string,
  auth: string | undefined
) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/api/edit_writing`,
      {
        id: id,
        title: title,
        author: author,
        content: content,
        date: date,
        auth: auth,
      },
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.error(error);
      throw new Error("Falied to post");
    });
}

export default editWriting;
