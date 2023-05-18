import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../modules/isLoggedin";
import { clearUserProfile } from "../modules/userProfile";

interface Props {
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: any;
  display?: string;
}

function ToggleMenu({ ref, onClick, display }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container ref={ref} onClick={onClick} display={display}>
      <Menu
        onClick={() => {
          navigate("/test");
        }}
      >
        마이페이지
      </Menu>
      <Menu
        onClick={() => {
          navigate("/test");
        }}
      >
        설정
      </Menu>
      <Menu
        onClick={() => {
          dispatch(logout());
          dispatch(clearUserProfile(null));
          localStorage.removeItem("jwt");
          navigate("/");
        }}
      >
        로그아웃
      </Menu>
    </Container>
  );
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${({ theme }) => theme.color.dark200};
  width: 10%;
  height: auto;
  border-radius: 1rem;
`;

const Menu = styled.div<Props>`
  cursor: pointer;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: 600;
  width: 100%;
  height: 6vh;
  color: ${({ theme }) => theme.color.white};

  :hover {
    background-color: ${({ theme }) => theme.color.dark150};
  }
`;

export default ToggleMenu;
