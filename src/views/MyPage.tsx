import styled from "styled-components";
import UserImage from "../components/UserImage";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function MyPage() {
  const nickname = useSelector(
    (state: RootState) => state.userProfile?.nickname
  );

  const [arr, setArr] = useState<string[]>([]);

  useEffect(() => {
    let x: any = localStorage.getItem("contents");
    if (x) {
      x = JSON.parse(x);
      setArr(x);
    }
  }, []);

  return (
    <Container>
      <Profile>
        <UserImage size="large" hover="none"></UserImage>
        <UserName>{nickname}</UserName>
      </Profile>
      <Text>나의 포스트</Text>
      <Contents>
        {arr.map((text, i) => {
          return (
            <Card>
              <h1>{i + 1}</h1>
              <p>{text}</p>
            </Card>
          );
        })}
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
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

const Text = styled.div`
  text-align: left;
  margin-top: 50px;
  font-weight: 500;
  font-size: 1.5rem;
  width: 100%;
`;

const Contents = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  gap: 5px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;

  :last-child {
    justify-self: flex-end;
  }
`;

export default MyPage;
