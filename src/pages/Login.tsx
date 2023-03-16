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
      <MainTextArea></MainTextArea>
      <LoginArea>
        <LoginAreaMarginTop></LoginAreaMarginTop>
        <ModalBox>
          <h1>{title}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: "100%", display: "inline-flex" }}>
              <SignIn
                onClick={() => {
                  signInForm();
                }}
                color={title === "로그인" ? "1" : ""}
              >
                로그인
              </SignIn>
              <SignUp
                onClick={() => {
                  signUpForm();
                }}
                color={title === "회원가입" ? "1" : ""}
              >
                회원가입
              </SignUp>
            </div>
            {title === "로그인" ? (
              <LoginForm>
                <Label>아이디</Label>
                <InputBox placeholder="ID를 입력하세요"></InputBox>
                <Label>비밀번호</Label>
                <InputBox
                  type="password"
                  placeholder="PASSWORD를 입력하세요"
                ></InputBox>
                <SumbitButton type="submit">{title}</SumbitButton>
              </LoginForm>
            ) : (
              <LoginForm>
                <Label>{title}</Label>
                <InputBox placeholder={title}></InputBox>
                <Label>{title}</Label>
                <InputBox type="password" placeholder={title}></InputBox>
                <SumbitButton type="submit">{title}</SumbitButton>
              </LoginForm>
            )}
          </div>
          <div id="여백" style={{ marginTop: "50px" }}></div>
        </ModalBox>
      </LoginArea>
    </>
  );
}

const MainTextArea = styled.div`
  width: 60%;
  height: 100%;
`;

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
`;

const LoginAreaMarginTop = styled.div`
  width: 100%;
  height: 70px;
`;

const ModalBox = styled.div`
  background-color: ${({ theme }) => theme.color.bg150};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 500px;
  border-radius: 10px;
`;

const SignIn = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  font-weight: 600;
  background-color: ${(props) =>
    props.color
      ? ({ theme }) => theme.color.bg150
      : ({ theme }) => theme.color.bg200};

  :hover {
    background-color: ${({ theme }) => theme.color.bg100};
  }
`;

const SignUp = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  font-weight: 600;
  background-color: ${(props) =>
    props.color
      ? ({ theme }) => theme.color.bg150
      : ({ theme }) => theme.color.bg200};
  :hover {
    background-color: ${({ theme }) => theme.color.bg100};
  }
`;

const Label = styled.div`
  width: 80%;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: small;
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
  outline: none;
  border: none;
  border-radius: 2px;
`;

const SumbitButton = styled.button`
  margin-top: 30px;
  width: 82%;
  outline: none;
  height: 35px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.bg200};
  border: none;
  border-radius: 2px;
  font-size: medium;
  font-weight: 700;

  :hover {
    background-color: ${({ theme }) => theme.color.bg100};
  }
`;

export default Login;
