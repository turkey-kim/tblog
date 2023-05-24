import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function postWriting(
  title: string,
  author: string,
  content: string | null,
  date: string,
  auth: string
) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/api/post_writing`,
      {
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

export default postWriting;
