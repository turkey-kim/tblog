import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import UserImage from "./UserImage";
import ToggleMenu from "./ToggleMeun";
import Direction from "./Directon";
import { useRef } from "react";
import useMousedown from "../utils/hooks/useMousedown";

function Header() {
  const navigate = useNavigate();
  const main = function (): void {
    navigate("/");
  };

  const targetRef = useRef<HTMLDivElement>(null);
  const exept = useRef<HTMLDivElement>(null);
  const [targetOn, onClick] = useMousedown(targetRef, exept);

  const isLoggedIn = useSelector(
    (state: RootState) => state.isLoggedIn.isLoggedIn
  );

  return (
    <div>
      <HeaderBox>
        <Title onClick={main}>Tblog</Title>
        {isLoggedIn ? (
          <AppContainer>
            <Button
              onClick={() => {
                navigate("/post");
              }}
              text="글쓰기"
              size="medium"
              color="dark"
            ></Button>
            <ProfileCotainer ref={exept} onClick={onClick}>
              <UserImage size="small"></UserImage>
              <Direction
                size="small"
                direction="down"
                color="light"
              ></Direction>
            </ProfileCotainer>
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
      <ToggleContainer ref={targetRef}>
        {targetOn ? <ToggleMenu onClick={onClick}></ToggleMenu> : null}
      </ToggleContainer>
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
  justify-content: right;
  width: 50%;
`;

interface Props {
  onClick?: any;
}
const ProfileCotainer = styled.div<Props>`
  display: flex;
  justify-content: right;
  width: auto;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 1rem;
`;

export default Header;
