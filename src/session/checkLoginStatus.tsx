import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../store";

axios.defaults.withCredentials = true;

const CheckLoginStatus = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/checkLoginStatus"
    );
    if (response.data.isLoggedIn == true) {
      console.log("로그인 중");
    } else {
      console.log("로그인상태 아님");
    }
  } catch (error) {
    throw error;
  }
};

export default CheckLoginStatus;
