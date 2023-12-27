import axios from "axios";
import { SERVER_API_ADDRESS } from "../constants/link";

export const getComments = async (
  apiEndPoint?: string | null,
  pageNumber?: string | null
) => {
  try {
    const res = await axios.post(
      `${SERVER_API_ADDRESS}/${apiEndPoint}`,
      {
        pageNumber: pageNumber,
      },
      {
        withCredentials: true,
      }
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const postComment = async (
  apiEndpoint: string,
  pageNumber: string | undefined,
  user: string | undefined,
  content: string | undefined,
  date: string | undefined,
  parentId?: string | undefined
) => {
  try {
    return await axios.post(`${SERVER_API_ADDRESS}/${apiEndpoint}`, {
      pageNumber: pageNumber,
      user: user,
      content: content,
      date: date,
      parentId: parentId,
    });
  } catch (err) {
    console.error(err);
  }
};

export const editComment = (
  apiEndpoint: string | undefined,
  commentId: string | undefined,
  content: string | undefined,
  date: string | undefined
) => {
  try {
    return axios.post(`${SERVER_API_ADDRESS}/${apiEndpoint}`, {
      commentId: commentId,
      content: content,
      date: date,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async (
  apiEndpoint: string,
  commentId: string | undefined
) => {
  try {
    return await axios.post(
      `${SERVER_API_ADDRESS}/${apiEndpoint}`,
      { commentId: commentId },
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
};
