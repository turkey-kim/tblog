import styled from "styled-components";

type UserImageSize = "small" | "medium" | "large";

interface Props {
  onClick?: any;
  size?: UserImageSize;
  ref?: any;
}

function UserImage({ onClick, size }: Props) {
  return (
    <ImageContainer>
      <UserProfile
        src="icon/userProfile.png"
        size={size}
        onClick={onClick}
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
  background-color: ${({ theme }) => theme.color.bg50};
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
    background-color: ${({ theme }) => theme.color.bg200};
  }
`;

export default UserImage;
