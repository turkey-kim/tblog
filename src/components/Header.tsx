import React, { ReactEventHandler } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const login = function (): void {
    navigate("./login");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "red",
          justifyContent: "space-between",
          padding: "none",
        }}
      >
        <div style={{ fontSize: "25px" }}>Tblog</div>
        <div>I'm Header</div>
        <div style={{ display: "inline-flex" }}>
          <div>*</div>
          <button
            onClick={(e: any) => {
              login();
              console.log("1");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
