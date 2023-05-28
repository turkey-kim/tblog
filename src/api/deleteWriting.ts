import { SERVER_API_ADDRESS } from "../constants/link";
import axios from "axios";

function deleteWriting(apiEndPoint?: string | null, writingId?: string | null) {
  return axios
    .post(
      `${SERVER_API_ADDRESS}/${apiEndPoint}`,
      {
        writingId: writingId,
      },
      {
        withCredentials: true,
      }
    )
    .catch((error) => {
      console.error(error);
    });
}

export default deleteWriting;
