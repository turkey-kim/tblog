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
          style={{ fontSize: "25px" }}
          onClick={() => {
            main();
          }}
        >
          Tblog
        </div>
        <div>I'm Header</div>
        <div style={{ display: "inline-flex" }}>
          <button
            onClick={(e: any) => {
              login();
              console.log("1");
            }}
          >
            Login
          </button>
        </div>
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

export default Header;
