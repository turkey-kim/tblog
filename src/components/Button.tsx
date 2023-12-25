import styled from "styled-components";
import React from "react";

type ButtonSize = "small" | "medium" | "mediumLarge" | "large";
type ButtonColor = "light" | "dark" | "green";
type BorderRadius = "small" | "medium" | "large";
type ButtonType = "button" | "submit" | "reset";

interface Props {
  type?: ButtonType;
  onClick?: any;
  margin?: string;
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  borderRadius?: BorderRadius;
}

function Button({
  onClick,
  margin,
  text,
  size,
  color,
  borderRadius,
}: Props): React.ReactElement {
  return (
    <Btn
      onClick={onClick}
      size={size}
      color={color}
      margin={margin}
      borderRadius={borderRadius}
    >
      {text}
    </Btn>
  );
}

const Btn = styled.button<Props>`
  cursor: pointer;
  margin: ${(props) => (props.margin ? props.margin : "auto 15px auto 15px")};
  border-radius: ${(props) => {
    switch (props.borderRadius) {
      case "small":
        return "7px";
      case "medium":
        return "12px";
      default:
        return "20px";
    }
  }};

  font-weight: 700;

  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "30px";
      case "mediumLarge":
        return "40px";
      case "large":
        return "45px";
      default:
        return "35px";
    }
  }};

  border: 1px solid
    ${(props) => {
      switch (props.color) {
        case "light":
          return props.theme.color.black;
        case "green":
          return props.theme.color.green;
        default:
          return props.theme.color.bg50;
      }
    }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "12px";
      case "mediumLarge":
        return "14px";
      case "large":
        return "16px";
      default:
        return "13px";
    }
  }};

  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "60px";
      case "mediumLarge":
        return "120px";
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
      case "green":
        return props.theme.color.bg50;
      default:
        return props.theme.color.black;
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case "light":
        return props.theme.color.black;
      case "green":
        return props.theme.color.green;
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
        case "green":
          return props.theme.color.green;
        default:
          return props.theme.color.bg50;
      }
    }};

    color: ${(props) => {
      switch (props.color) {
        case "light":
          return props.theme.color.bg50;
        case "green":
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
          case "green":
            return props.theme.color.bg50;
          default:
            return props.theme.color.black;
        }
      }};
  }
`;

export default Button;
