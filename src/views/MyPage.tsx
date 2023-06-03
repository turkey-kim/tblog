import styled from "styled-components";
import UserImage from "../components/UserImage";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import getMyWriting from "../api/getMyWritings";
import WritingImage from "../components/WritingImage";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function MyPage() {
  const user = useSelector((state: RootState) => state.userProfile);
  const [arr, setArr] = useState<any>([{}]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      try {
        let apiEndPoint = "api/get_my_writing";
        const result = await getMyWriting(user?.id, apiEndPoint);
        setArr(result?.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  return (
    <Container>
      <Profile>
        <UserImage size="large" hover="none"></UserImage>
        <UserName>{user?.nickname}</UserName>
      </Profile>
      <Text>나의 포스트</Text>
      <Contents>
        {arr.length != 0
          ? arr.map((element: any) => (
              <Card
                id={element.id}
                title={element.title}
                date={element.date}
                author={element.author}
                image={<WritingImage />}
              ></Card>
            ))
          : null}
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

export default MyPage;
