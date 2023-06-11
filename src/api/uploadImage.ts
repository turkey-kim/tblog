import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

function uploadImage(apiEndpoint: string, formData: FormData) {
  return axios
    .post(`${SERVER_API_ADDRESS}/${apiEndpoint}`, formData, {
      withCredentials: true,
    })
    .catch((error) => {
      console.error(error);
    });
}

export default uploadImage;
