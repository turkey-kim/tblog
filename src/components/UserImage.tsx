import styled from "styled-components";

type UserImageSize = "small" | "medium" | "large";

interface Props {
  onClick?: any;
  size?: UserImageSize;
}

function UserImage({ onClick, size }: Props) {
  return (
    <ImageContainer>
      <UserProfile
        src="image/userProfile.png"
        sizes={size}
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

const UserProfile = styled.img`
  background-color: ${({ theme }) => theme.color.bg150};
  border-radius: 50%;
  cursor: pointer;
  width: ${(props) =>
    props.sizes === "small"
      ? "40px"
      : props.sizes === "large"
      ? "150px"
      : "80px"};
  height: ${(props) =>
    props.sizes === "small"
      ? "40px"
      : props.sizes === "large"
      ? "150px"
      : "80px"};
`;

export default UserImage;
