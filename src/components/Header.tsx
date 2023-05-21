import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import UserImage from "./UserImage";
import ToggleMenu from "./ToggleMeun";
import Direction from "./Directon";
import { useState, useRef, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const main = function (): void {
    navigate("/");
  };

  const toggleRef = useRef<HTMLDivElement>(null);
  const toggleButton = useRef<HTMLDivElement>(null);
  let [toggleOn, setToggleOn] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", toggleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", toggleOutSideClick);
    };
  });

  const toggleOutSideClick = (e: any) => {
    if (toggleButton.current?.contains(e.target)) {
      return;
    } else if (toggleOn && !toggleRef.current?.contains(e.target)) {
      setToggleOn(false);
    }
  };

  const isLoggedIn = useSelector(
    (state: RootState) => state.isLoggedIn.isLoggedIn
  );

  return (
    <div>
      <HeaderBox>
        <Title onClick={main}>Tblog</Title>
        {isLoggedIn ? (
          <AppContainer ref={toggleButton}>
            <Button
              onClick={() => {
                navigate("/post");
              }}
              text="글쓰기"
              size="medium"
              color="dark"
            ></Button>
            <UserImage
              size="small"
              onClick={() => {
                setToggleOn(!toggleOn);
              }}
            ></UserImage>
            <Direction
              size="small"
              direction="down"
              color="light"
              onClick={() => {
                setToggleOn(!toggleOn);
              }}
            ></Direction>
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
      <ToggleContainer ref={toggleRef}>
        {toggleOn ? (
          <ToggleMenu
            onClick={() => {
              setToggleOn(false);
            }}
          ></ToggleMenu>
        ) : null}
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

const ToggleContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 1rem;
`;

export default Header;
