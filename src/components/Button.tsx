import styled from "styled-components";
import React from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "light" | "dark";

interface Props {
  onClick(): any;
  type?: string;
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
}

function Button({
  onClick,
  type,
  text,
  size,
  color,
}: Props): React.ReactElement {
  return (
    <Btn onClick={onClick} size={size} color={color}>
      {text}
    </Btn>
  );
}

const Btn = styled.button<Props>`
  cursor: pointer;
  margin: 20px;
  border-radius: 20px;
  font-weight: 700;
  height: 35px;
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
        return "310px";
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
