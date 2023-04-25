import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useIdChecker from "../hooks/signUp/idChecker";
import useInput from "../hooks/useInput";
import {
  checkWhiteSpace,
  isPasswordValid,
  isPasswordMatch,
} from "../businessLogic/signUp";
import postSignUp from "../businessLogic/signUp/postSignup";

function Login() {
  const title: string = "회원가입";
  const navigate = useNavigate();
  const [text, setText] = useInput({
    id: "",
    pw: "",
    pw2: "",
  });
  const { id, pw, pw2 } = text;
  const [idValidity] = useIdChecker(id);
  const [pwAlert, setPwAlert] = useState(false);

  function signUpSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (idValidity) {
      alert("중복된 아이디입니다, 다른 아이디를 입력해주세요");
    } else if (checkWhiteSpace(id, pw, pw2) == true) {
      alert("빈칸을 모두 채워주세요.");
    } else if (isPasswordMatch(pw, pw2) == false) {
      alert("비밀번호가 일치하지 않습니다.");
      setPwAlert(true);
    } else if (isPasswordValid(pw) == false) {
      alert("비밀번호는 영문자, 숫자, 특수문자를 포함한 8-20글자여야 합니다.");
    } else {
      setPwAlert(false);
      postSignUp(id, pw);
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
                    navigate("/login");
                  }}
                >
                  로그인
                </SignIn>
                <SignUp>회원가입</SignUp>
              </div>
              <LoginForm>
                <Label>아이디</Label>
                <InputBox
                  name="id"
                  placeholder="사용하실 아이디를 입력하세요"
                  value={id}
                  onChange={setText}
                ></InputBox>
                <Label>비밀번호</Label>
                <InputBox
                  name="pw"
                  type="password"
                  placeholder="영대문자, 영소문자, 숫자, 특수문자 포함 8~20자"
                  value={pw}
                  onChange={setText}
                ></InputBox>
                <InputBox
                  name="pw2"
                  type="password"
                  placeholder="비밀번호를 확인해주세요"
                  value={pw2}
                  onChange={setText}
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
