import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const LOGIN_KEY = "로그인";

function Login() {
  var [title, setTitle] = useState("로그인");
  const navigate = useNavigate();
  const signUp = function () {
    navigate("/sign_up");
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const signInForm = () => {
    setTitle(LOGIN_KEY);
  };

  const signUpForm = () => {
    setTitle("회원가입");
  };

  function submitLogin(e: FormEvent) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/login",
        {
          id: id,
          pw: pw,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        localStorage.setItem("jwt", response.data.token);
        redirect("/");
      })
      .catch((err) => {
        console.log("login error", err);
        console.log("실패");
      });
  }

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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100%", display: "inline-flex" }}>
                <SignIn>로그인</SignIn>
                <SignUp
                  onClick={() => {
                    signUp();
                  }}
                >
                  회원가입
                </SignUp>
              </div>
              <LoginForm id="loginForm" onSubmit={submitLogin}>
                <Label>아이디</Label>
                <InputBox
                  placeholder="ID를 입력하세요"
                  value={id}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setId(e.target.value);
                  }}
                ></InputBox>
                <Label>비밀번호</Label>
                <InputBox
                  type="password"
                  placeholder="PASSWORD를 입력하세요"
                  value={pw}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPw(e.target.value);
                  }}
                ></InputBox>
                <SubmitButton type="submit">로그인</SubmitButton>
              </LoginForm>
            </div>
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
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.color.bg150};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 450px;
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
  height: 40px;
  border: none;
  border-radius: 10px 0 0 0;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.bg150};
`;

const SignUp = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0 10px 0 0;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.bg200};
`;

const Label = styled.div`
  width: 80%;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: small;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const InputBox = styled.input`
  width: 80%;
  height: 30px;
  outline: none;
  border: 2px lightGray solid;
  border-radius: 5px;

  :focus {
    border-color: #b6ade6;
  }
`;

const SubmitButton = styled.button`
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
