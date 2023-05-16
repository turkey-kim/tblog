import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useInput from "../utils/hooks/useInput";
import { isPasswordValid, idChecker } from "../helper/signUp";
import sendUserInfo from "../api/sendUserInfo";

function Login() {
  const navigate = useNavigate();
  const [text, setText] = useInput({
    id: "",
    pw: "",
    pw2: "",
    nicknname: "",
  });
  const { id, pw, pw2, nickname } = text;
  const [pwAlert, setPwAlert] = useState(false);
  const apiEndpoint = "sign_up";

  function isBlank(id: string, pw: string, pw2: string): boolean {
    if (id && pw && pw2 != "") {
      return false;
    } else {
      return true;
    }
  }

  function comparePassword(pw: string, pw2: string): boolean {
    if (pw == pw2) {
      return true;
    } else {
      return false;
    }
  }

  async function signUpSubmit(e: React.MouseEvent) {
    e.preventDefault();
    const isIdValid = await idChecker(id);
    switch (true) {
      case isIdValid:
        alert("중복된 아이디입니다, 다른 아이디를 입력해주세요");
        break;
      case isBlank(id, pw, pw2):
        alert("빈칸을 모두 채워주세요.");
        break;
      case !comparePassword(pw, pw2):
        setPwAlert(true);
        break;
      case !isPasswordValid(pw):
        alert(
          "비밀번호는 영문자, 숫자, 특수문자를 포함한 8-20글자여야 합니다."
        );
        break;
      default:
        setPwAlert(false);
        try {
          await sendUserInfo(id, pw, nickname, apiEndpoint);
          alert("회원가입되셨습니다.");
          navigate("/login");
        } catch (err) {
          alert("회원가입 실패");
          console.error(err);
        }
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
                <Label marginTop="20px">아이디</Label>
                <InputBox
                  name="id"
                  placeholder="사용하실 아이디를 입력하세요"
                  value={id}
                  onChange={setText}
                ></InputBox>
                <Label marginTop="5px">닉네임</Label>
                <InputBox
                  name="nickname"
                  value={nickname}
                  onChange={setText}
                  placeholder="사용하실 닉네임을 입력하세요"
                ></InputBox>
                <Label marginTop="20px">비밀번호</Label>
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
                  placeholder="비밀번호를 재확인해주세요"
                  value={pw2}
                  onChange={setText}
                ></InputBox>
                {pwAlert === true ? (
                  <PasswordAlert>비밀번호를 재확인하세요</PasswordAlert>
                ) : (
                  ""
                )}
                <SubmitButton type="submit" onClick={signUpSubmit}>
                  회원가입
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
  background-color: ${({ theme }) => theme.color.dark200};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 500px;
  border-radius: 15px;
  color: ${({ theme }) => theme.color.white};

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
  border-radius: 15px 0 0 0;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.dark100};
  color: ${({ theme }) => theme.color.white};
`;

const SignUp = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0 15px 0 0;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.dark200};
  color: ${({ theme }) => theme.color.white};
`;

interface LabelProps {
  marginTop: string;
}

const Label = styled.div<LabelProps>`
  width: 80%;
  text-align: left;
  margin-top: ${(props) => props.marginTop};
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
  margin-top: 20px;
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
  margin-top: 10px;
  color: ${({ theme }) => theme.color.white};
  font-size: small;
  font-weight: 600;
`;
export default Login;
