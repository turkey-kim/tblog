import styled from "styled-components";
import React from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "light" | "dark";

interface Props {
  onClick?: any;
  margin?: string;
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
}

function Button({
  onClick,
  margin,
  text,
  size,
  color,
}: Props): React.ReactElement {
  return (
    <Btn onClick={onClick} size={size} color={color} margin={margin}>
      {text}
    </Btn>
  );
}

const Btn = styled.button<Props>`
  cursor: pointer;
  margin: ${(props) => (props.margin ? props.margin : "auto 15px auto 15px")};
  border-radius: 20px;
  font-weight: 700;
  height: ${(props) => (props.size == "large" ? "45px" : "35px")};
  border: 1px solid
    ${(props) => {
      switch (props.color) {
        case "light":
          return props.theme.color.black;
        default:
          return props.theme.color.bg50;
      }
    }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "12px";
      case "large":
        return "16px";
      default:
        return "13px";
    }
  }};

  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "50px";
      case "large":
        return "250px";
      default:
        return "75px";
    }
  }};

  background-color: ${(props) => {
    switch (props.color) {
      case "light":
        return props.theme.color.bg50;
      default:
        return props.theme.color.black;
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case "light":
        return props.theme.color.black;
      default:
        return props.theme.color.bg50;
    }
  }};

  :hover {
    transition-duration: 0.2s;
    background-color: ${(props) => {
      switch (props.color) {
        case "light":
          return props.theme.color.black;
        default:
          return props.theme.color.bg50;
      }
    }};

    color: ${(props) => {
      switch (props.color) {
        case "light":
          return props.theme.color.bg50;
        default:
          return props.theme.color.black;
      }
    }};

    border: 1px solid
      ${(props) => {
        switch (props.color) {
          case "light":
            return props.theme.color.bg50;
          default:
            return props.theme.color.black;
        }
      }};
  }
`;

export default Button;
