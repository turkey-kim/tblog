import styled from "styled-components";
import UserImage from "../components/UserImage";
import { RootState } from "../modules";
import { useSelector } from "react-redux";

function MyPage() {
  const nickname = useSelector(
    (state: RootState) => state.userProfile?.nickname
  );
  return (
    <Container>
      <p>this is my page</p>
      <Profile>
        <UserImage size="large" color="dark" hover="none"></UserImage>
        <UserName>{nickname}</UserName>
      </Profile>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Profile = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.bg200};
`;

const UserName = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1rem;
`;

export default MyPage;
