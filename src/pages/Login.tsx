import React, { ReactEventHandler, useState } from "react";
import LoginButton from "../components/LoginButton";
import styled from "styled-components";
import Button from "../components/Button";

const LOGIN_KEY = "로그인";

function Login() {
  var [title, setTitle] = useState("로그인");

  const signInForm = () => {
    setTitle(LOGIN_KEY);
  };

  const signUpForm = () => {
    setTitle("회원가입");
  };

  return (
    <>
      <EntireField>
        <TextField>
          <h1>Welcome to Tblog!</h1>
          <h3>Sign in & Enjoy our service as you want</h3>
          <p>We provide writing service and you can write whatever you want</p>
        </TextField>
        <LoginField>
          <LoginBox>
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
                  <Button onClick={() => {}} text="test"></Button>
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
          </LoginBox>
        </LoginField>
      </EntireField>
    </>
  );
}

const EntireField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 20px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    justify-content: center;
  }
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 200px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 150px;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.color.bg150};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: 500px;
  border-radius: 10px;
  margin-top: 100px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 380px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-top: 30px;
  }
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
