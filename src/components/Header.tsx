import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const navigate = useNavigate();
  const login = function (): void {
    navigate("/login");
  };
  const main = function (): void {
    navigate("/");
  };
  return (
    <div>
      <HeaderBox>
        <div
          style={{ fontSize: "25px", fontWeight: "700", cursor: "pointer" }}
          onClick={() => {
            main();
          }}
        >
          Tblog
        </div>
        <div>I'm Header</div>
        <LoginButton
          onClick={(e: any) => {
            login();
          }}
        >
          로그인
        </LoginButton>
      </HeaderBox>
    </div>
  );
}

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
  padding: none;
  background-color: ${({ theme }) => theme.color.bg200};
  height: 50px;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 80px;
  height: 70%;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.bg100};
  font-size: small;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.bg150};
  }
`;

export default Header;
