import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../modules/isLoggedin";
import { clearUserProfile } from "../modules/userProfile";
import UserImage from "./UserImage";
import Direction from "./directon";

function Header() {
  const navigate = useNavigate();
  const main = function (): void {
    navigate("/");
  };

  const isLoggedIn = useSelector(
    (state: RootState) => state.isLoggedIn.isLoggedIn
  );

  const userProfile = useSelector((state: RootState) => state.userProfile);

  const dispatch = useDispatch();

  return (
    <div>
      <HeaderBox>
        <Title onClick={main}>Tblog</Title>
        {isLoggedIn ? (
          <AppContainer>
            <Button
              onClick={() => {
                navigate("/edit");
              }}
              text={userProfile?.nickname}
              size="medium"
              color="light"
            ></Button>
            <Button
              onClick={() => {
                dispatch(logout());
                dispatch(clearUserProfile(null));
                localStorage.removeItem("jwt");
              }}
              text="LOGOUT"
              size="medium"
              color="light"
            ></Button>
            <UserImage size="small" onClick={() => {}}></UserImage>
            <Direction size="small" direction="down" color="light"></Direction>
          </AppContainer>
        ) : (
          <AppContainer>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              text="LOGIN"
              size="medium"
              color="light"
            ></Button>
          </AppContainer>
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

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
`;

export default Header;
