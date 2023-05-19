import styled from "styled-components";

type UserImageSize = "small" | "medium" | "large";
type UserImageColor = "light" | "medium" | "dark";

interface Props {
  onClick?: any;
  size?: UserImageSize;
  hover?: string;
  color?: UserImageColor;
}

function UserImage({ onClick, size, color, hover }: Props) {
  return (
    <ImageContainer>
      <UserProfile
        src="icon/userProfile.png"
        size={size}
        onClick={onClick}
        color={color}
        hover={hover}
      ></UserProfile>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserProfile = styled.img<Props>`
  background-color: ${(props) => {
    switch (props.color) {
      case "light":
        return props.theme.color.white;
      case "dark":
        return props.theme.color.bg200;
      default:
        return props.theme.color.bg100;
    }
  }};

  border-radius: 50%;
  cursor: pointer;
  width: ${(props) =>
    props.size === "small"
      ? "40px"
      : props.size === "large"
      ? "150px"
      : "80px"};
  height: ${(props) =>
    props.size === "small"
      ? "40px"
      : props.size === "large"
      ? "150px"
      : "80px"};

  :hover {
    transition-duration: 0.2s;
    background-color: ${(props) =>
      props.hover === "none" ? null : props.theme.color.green};
  }
`;

export default UserImage;
