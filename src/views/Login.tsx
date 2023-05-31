import { FormEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useInput from "../utils/hooks/useInput";
import sendUserInfo from "../api/sendUserInfo";
import { useDispatch } from "react-redux";
import { login } from "../modules/isLoggedin";
import { setUserProfile } from "../modules/userProfile";
import TblogIcon from "../assets/icons/main.png";

function Login() {
  const navigate = useNavigate();
  const [text, setText] = useInput({
    id: "",
    pw: "",
  });

  const { id, pw } = text;
  const apiEndpoint = "login";
  const dispatch = useDispatch();

  async function submitLogin(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await sendUserInfo(id, pw, null, apiEndpoint);

      if (response?.data.token == undefined) {
        alert("잘못된 회원정보입니다.");
      } else {
        // 토큰 및 유저 프로필 저장
        localStorage.setItem("jwt", response.data.token);
        const userProfile = {
          id: response.data.profile.id,
          nickname: response.data.profile.nickname,
        };
        dispatch(login());
        dispatch(setUserProfile(userProfile));
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <EntireField>
        <TextField>
          <Icon></Icon>
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
                    navigate("/sign_up");
                  }}
                >
                  회원가입
                </SignUp>
              </div>
              <LoginForm id="loginForm" onSubmit={submitLogin}>
                <Label>아이디</Label>
                <InputBox
                  name="id"
                  placeholder="ID를 입력하세요"
                  value={id}
                  onChange={setText}
                ></InputBox>
                <Label>비밀번호</Label>
                <InputBox
                  name="pw"
                  type="password"
                  placeholder="PASSWORD를 입력하세요"
                  value={pw}
                  onChange={setText}
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
  justify-content: space-between;
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
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 450px;
  border-radius: 15px;

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
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`;

const SignUp = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0 15px 0 0;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.dark150};
  color: ${({ theme }) => theme.color.white};
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
  margin-top: 50px;
  width: 82%;
  outline: none;
  height: 35px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.bg100};
  border: none;
  border-radius: 10px;
  font-size: medium;
  font-weight: 700;

  :hover {
    transition-duration: 0.1s;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;

const Icon = styled.image`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  content: url(${TblogIcon});
`;

export default Login;
