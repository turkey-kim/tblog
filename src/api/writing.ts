import { SERVER_API_ADDRESS } from "../constants/link";
import axios from "axios";

// 전체 글 불러오기
export const getWritings = async (apiEndPoint?: string | null) => {
  try {
    const res = await axios.get(`${SERVER_API_ADDRESS}/${apiEndPoint}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 나의 글 불러오기
export const getMyWriting = async (
  authorId: string | undefined,
  apiEndPoint: string
) => {
  try {
    const res = await axios.post(`${SERVER_API_ADDRESS}/${apiEndPoint}`, {
      author: authorId,
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 특정 글 불러오기
export const getOneWriting = async (id: any, apiEndPoint?: string | null) => {
  try {
    const res = await axios.post(`${SERVER_API_ADDRESS}/${apiEndPoint}`, {
      id: parseInt(id),
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// 글 포스팅
export const postWriting = async (
  title: string,
  author: string | undefined,
  content: string | null,
  date: string,
  auth: string | undefined
) => {
  try {
    return await axios.post(`${SERVER_API_ADDRESS}/api/post_writing`, {
      title: title,
      author: author,
      content: content,
      date: date,
      auth: auth,
    });
  } catch (err) {
    console.error(err);
  }
};

// 글 수정
export const editWriting = async (
  id: string | undefined,
  title: string,
  author: string | undefined,
  content: string | null,
  date: string,
  auth: string | undefined
) => {
  try {
    const res = await axios.post(`${SERVER_API_ADDRESS}/api/edit_writing`, {
      id: id,
      title: title,
      author: author,
      content: content,
      date: date,
      auth: auth,
    });

    console.log(res.data.status);
  } catch (err) {
    console.error(err);
  }
};

// 글 삭제
export const deleteWriting = async (
  apiEndPoint?: string | null,
  writingId?: string | null
) => {
  try {
    return await axios.post(`${SERVER_API_ADDRESS}/${apiEndPoint}`, {
      writingId: writingId,
    });
  } catch (err) {
    console.error(err);
  }
};

export const uploadImage = async (apiEndpoint: string, formData: FormData) => {
  try {
    const res = await axios.post(
      `${SERVER_API_ADDRESS}/${apiEndpoint}`,
      formData
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
