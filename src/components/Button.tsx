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
  margin: 20px;
  border: 1px solid
    ${(props) =>
      props.color === "light"
        ? props.theme.color.black
        : props.theme.color.bg50};
  border-radius: 20px;
  cursor: pointer;
  font-size: ${(props) =>
    props.size === "small" ? "12px" : props.size === "large" ? "16px" : "13px"};
  font-weight: 700;
  width: ${(props) =>
    props.size === "small"
      ? "50px"
      : props.size === "large"
      ? "310px"
      : "75px"};
  height: ${(props) =>
    props.size === "small" ? "35px" : props.size === "large" ? "35px" : "35px"};
  background-color: ${(props) =>
    props.color === "light" ? props.theme.color.bg50 : props.theme.color.black};
  color: ${(props) =>
    props.color === "light" ? props.theme.color.black : props.theme.color.bg50};

  :hover {
    transition-duration: 0.2s;
    background-color: ${(props) =>
      props.color === "light"
        ? props.theme.color.black
        : props.theme.color.bg50};

    color: ${(props) =>
      props.color === "light"
        ? props.theme.color.bg50
        : props.theme.color.black};

    border: 1px solid
      ${(props) =>
        props.color === "light"
          ? props.theme.color.bg50
          : props.theme.color.black};
  }
`;

export default Button;
