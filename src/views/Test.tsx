import styled from "styled-components";
import axios from "axios";
import React from "react";

function Test() {
  function verifyToken(e: React.MouseEvent) {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    if (token) {
      axios
        .get("http://localhost:5000/api/check_token", {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.tokenValidity) {
            console.log("토큰인증성공");
          } else {
            console.log("토큰인증실패");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("발급받은 토큰이 없습니다.");
    }
  }

  return (
    <>
      <p>This is test page</p>
      <Button onClick={verifyToken}>쿠키 체크</Button>
    </>
  );
}

const Button = styled.button`
  color: red;
`;

export default Test;
