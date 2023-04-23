import styled from "styled-components";
import React from "react";

type ButtonSize = "small" | "medium" | "large";

interface Props {
  onClick(): any;
  type?: string;
  text?: string;
  size?: ButtonSize;
}

function Button({ onClick, type, text, size }: Props): React.ReactElement {
  return (
    <Btn onClick={onClick} size={size}>
      {text}
    </Btn>
  );
}

const Btn = styled.button<Props>`
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: ${(props) =>
    props.size === "small" ? "12px" : props.size === "large" ? "18px" : "14px"};
  width: ${(props) =>
    props.size === "small"
      ? "50px"
      : props.size === "large"
      ? "100px"
      : "75px"};
  height: ${(props) =>
    props.size === "small"
      ? "1.75rem"
      : props.size === "large"
      ? "3rem"
      : "2.25rem"};

  :hover {
    background-color: ${({ theme }) => theme.color.bg200};
  }
`;

export default Button;
