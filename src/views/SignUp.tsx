import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { response } from "express";
import { error } from "console";

function Login() {
  const title: string = "회원가입";
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [pwAlert, setPwAlert] = useState(false);
  const [idValid, setIdValid] = useState("");

  function goToLogin() {
    navigate("/login");
  }

  function idSetter(e: React.ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }

  function pwSetter(e: React.ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);
  }

  function pw2Setter(e: React.ChangeEvent<HTMLInputElement>) {
    setPw2(e.target.value);
  }

  function isWhitespace() {
    if (id && pw && pw2 != "") {
      return false;
    } else {
      return true;
    }
  }

  function isPasswordMatch() {
    if (pw == pw2) {
      return true;
    } else {
      return false;
    }
  }

  function isPasswordValid() {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(pw);
  }

  function isIdValid() {
    axios
      .post("http://localhost:5000/id_checker", { id: id })
      .then((response) => {
        const data = response.data;
        if (data.duplicate) {
          setIdValid("true");
        } else {
          setIdValid("false");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signUpSubmit(e: React.MouseEvent) {
    e.preventDefault();
    isIdValid();
    if (idValid == "true") {
      alert("중복된 아이디입니다, 다른 아이디를 입력해주세요");
    } else if (isWhitespace() == true) {
      alert("빈칸을 모두 채워주세요.");
    } else if (isPasswordMatch() == false) {
      alert("비밀번호가 일치하지 않습니다.");
      setPwAlert(true);
    } else if (isPasswordValid() == false) {
      alert(
        "비밀번호는 영대문자, 소문자, 숫자, 특수문자를 포함한 8-20글자여야 합니다."
      );
    } else {
      setPwAlert(false);
      axios
        .post("http://localhost:5000/sign_up", {
          id: id,
          pw: pw,
        })
        .then(() => {
          console.log("성공");
          alert("회원가입 성공!");
        })
        .catch(() => {
          console.log("실패");
        });
    }
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
                <SignIn
                  onClick={() => {
                    goToLogin();
                  }}
                >
                  로그인
                </SignIn>
                <SignUp>회원가입</SignUp>
              </div>
              <LoginForm>
                <Label>아이디</Label>
                <InputBox
                  placeholder="사용하실 아이디를 입력하세요"
                  value={id}
                  onChange={idSetter}
                ></InputBox>
                <Label>비밀번호</Label>
                <InputBox
                  type="password"
                  placeholder="영대문자, 영소문자, 숫자, 특수문자 포함 8~20자"
                  value={pw}
                  onChange={pwSetter}
                ></InputBox>
                <InputBox
                  type="password"
                  placeholder="비밀번호를 확인해주세요"
                  value={pw2}
                  onChange={pw2Setter}
                ></InputBox>
                {pwAlert === true ? (
                  <PasswordAlert>비밀번호를 재확인하시오</PasswordAlert>
                ) : (
                  ""
                )}
                <SubmitButton type="submit" onClick={signUpSubmit}>
                  {title}
                </SubmitButton>
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
  background-color: ${({ theme }) => theme.color.bg200};
`;

const SignUp = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0 10px 0 0;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.bg150};
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
  margin-bottom: 10px;

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

const PasswordAlert = styled.div`
  color: red;
  font-size: small;
`;

export default Login;
