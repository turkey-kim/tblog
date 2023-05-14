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
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: ${(props) =>
    props.size === "small" ? "12px" : props.size === "large" ? "16px" : "13px"};
  font-weight: ${(props) =>
    props.size === "small" ? "400" : props.size === "large" ? "650" : "500"};
  width: ${(props) =>
    props.size === "small"
      ? "50px"
      : props.size === "large"
      ? "310px"
      : "75px"};
  height: ${(props) =>
    props.size === "small" ? "35px" : props.size === "large" ? "35px" : "35px"};
  background-color: ${(props) =>
    props.color === "light"
      ? props.theme.color.bg100
      : props.theme.color.dark100};

  :hover {
    background-color: ${({ theme }) => theme.color.bg150};
  }
`;

export default Button;
