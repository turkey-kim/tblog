import React, { ReactEventHandler, useState } from "react";
import styled from "styled-components";

function Login() {
  var [title, setTitle] = useState("로그인");

  const signInForm = () => {
    setTitle("로그인");
  };

  const signUpForm = () => {
    setTitle("회원가입");
  };

  return (
    <>
      <ModalBox>
        <h1>{title}</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%", display: "inline-flex" }}>
            <SignIn
              onClick={() => {
                signInForm();
              }}
            >
              로그인
            </SignIn>
            <SignUp
              onClick={() => {
                signUpForm();
              }}
            >
              회원가입
            </SignUp>
          </div>
          {title === "로그인" ? (
            <LoginForm>
              <p>아이디</p>
              <InputBox></InputBox>
              <p>비밀번호</p>
              <InputBox></InputBox>
              <button>LOGIN</button>
            </LoginForm>
          ) : (
            <>회원가입이에용</>
          )}
        </div>
      </ModalBox>
    </>
  );
}

const SignIn = styled.button`
  width: 100%;
`;

const SignUp = styled.button`
  width: 100%;
`;

const ModalBox = styled.div`
  background-color: ${({ theme }) => theme.color.bg150};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  height: 500px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 80%;
  height: 30px;
`;

export default Login;
