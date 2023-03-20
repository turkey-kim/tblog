import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

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
        <Title onClick={main}>Tblog</Title>
        <Button onClick={login} text="LOGIN" size="medium"></Button>
      </HeaderBox>
    </div>
  );
}

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
  padding: none;
  background-color: ${({ theme }) => theme.color.bg150};
  height: 50px;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  align-items: center;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
  cursor: pointer;
`;

const Container = styled.div`
  height: 40px;
  width: 50px;
`;

export default Header;
