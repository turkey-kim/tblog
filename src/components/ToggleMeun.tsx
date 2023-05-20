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

  const logOut = () => {
    dispatch(logout());
    dispatch(clearUserProfile(null));
    localStorage.removeItem("jwt");
    navigate("/");
  };

  return (
    <MenuContainer ref={ref} onClick={onClick} display={display}>
      <Menu
        onClick={() => {
          navigate("/mypage");
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
      <Menu onClick={logOut}>로그아웃</Menu>
    </MenuContainer>
  );
}

const MenuContainer = styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  width: 150px;
  height: 23vh;
  border-radius: 0.5rem;
  margin-top: 1px;
`;

const Menu = styled.div<Props>`
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: 500;
  width: 100%;
  height: 6vh;
  color: ${({ theme }) => theme.color.white};

  :hover {
    color: ${({ theme }) => theme.color.green};
  }
`;

export default ToggleMenu;
