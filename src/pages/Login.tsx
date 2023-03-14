import React, { ReactEventHandler, useState } from "react";
import { setSyntheticLeadingComments } from "typescript";

function Login() {
  var [title, setTitle] = useState("로그인");

  let SignIn = function () {
    return (
      <div style={{ width: "50%" }}>
        <button
          style={{ width: "100%" }}
          onClick={() => {
            setTitle("로그인");
          }}
        >
          로그인
        </button>
      </div>
    );
  };

  let SignUp = function () {
    return (
      <div style={{ width: "50%" }}>
        <button
          style={{ width: "100%" }}
          onClick={() => {
            setTitle("회원가입");
          }}
        >
          회원가입
        </button>
      </div>
    );
  };

  let LoginBox = function () {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <p>아이디</p>
        <input></input>
        <p>비밀번호</p>
        <input></input>
        <button>LOGIN</button>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
          justifyContent: "center",
          width: "35%",
          height: "500px",
        }}
      >
        <h1>{title}</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%", display: "inline-flex" }}>
            <SignIn></SignIn>
            <SignUp></SignUp>
          </div>
          {title === "로그인" ? <LoginBox /> : <>회원가입이에용</>}
        </div>
      </div>
    </>
  );
}

export default Login;
