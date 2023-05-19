import styled from "styled-components";
import dark from "../assets/icons/direction_dark.png";
import light from "../assets/icons/direction_light.png";

type iconDirection = "right" | "down" | "left" | "up";
type directionSize = "small" | "medium" | "large";
type directionColor = "light" | "dark";

interface Props {
  direction?: iconDirection;
  size?: directionSize;
  color?: directionColor;
  onClick?: any;
}

function Direction({ direction, size, color, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <Icon direction={direction} size={size} color={color}></Icon>
    </Container>
  );
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img<Props>`
  margin: 0.5rem;

  transform: ${(props) => {
    switch (props.direction) {
      case "down":
        return "rotate(90deg)";
      case "left":
        return "rotate(180deg)";
      case "up":
        return "rotate(270deg)";
      default:
        return "none";
    }
  }};

  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "1rem";
      case "large":
        return "2rem";
      default:
        return "1.5rem";
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "1rem";
      case "large":
        return "2rem";
      default:
        return "1.5rem";
    }
  }};

  content: url(${(props) => (props.color === "dark" ? `${dark}` : `${light}`)});
`;

export default Direction;
