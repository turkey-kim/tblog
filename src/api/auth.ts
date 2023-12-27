import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

export const authWithToken = async (
  token?: string | null,
  apiEndpoint?: string
) => {
  try {
    const res = await axios.get(`${SERVER_API_ADDRESS}/${apiEndpoint}`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const sendUserInfo = async (
  id?: string | null,
  pw?: string | null,
  nickname?: string | null,
  apiEndpoint?: string | null
) => {
  try {
    const res = await axios.post(`${SERVER_API_ADDRESS}/${apiEndpoint}`, {
      id: id,
      pw: pw,
      nickname: nickname,
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
