import React from "react";
import styled from "styled-components";

interface Props {
  onClick(): void;
  text?: string;
  type?: string;
}

function LoginButton({ onClick, text, type }: Props): React.ReactElement {
  return <Button onClick={onClick}>{text}</Button>;
}

const Button = styled.button`
  width: 80%;
  height: 35px;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.bg100};
  font-size: small;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.bg200};
  }
`;

export default LoginButton;
