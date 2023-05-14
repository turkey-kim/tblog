import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../modules/isLoggedin";

function Header() {
  const navigate = useNavigate();
  const main = function (): void {
    navigate("/");
  };

  const isLoggedIn = useSelector(
    (state: RootState) => state.isLoggedIn.isLoggedIn
  );

  const dispatch = useDispatch();

  return (
    <div>
      <HeaderBox>
        <Title onClick={main}>Tblog</Title>
        {isLoggedIn ? (
          <Button
            onClick={() => {
              dispatch(logout());
              localStorage.removeItem("jwt");
            }}
            text="LOGOUT"
            size="medium"
            color="light"
          ></Button>
        ) : (
          <Button
            onClick={() => {
              navigate("/login");
            }}
            text="LOGIN"
            size="medium"
            color="light"
          ></Button>
        )}
      </HeaderBox>
    </div>
  );
}

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
  padding: none;
  background-color: ${({ theme }) => theme.color.black};
  height: 50px;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  align-items: center;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

const Container = styled.div`
  height: 40px;
  width: 50px;
`;

export default Header;
