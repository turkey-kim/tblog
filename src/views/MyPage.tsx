import styled from "styled-components";
import UserImage from "../components/UserImage";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import getMyWriting from "../api/getMyWritings";
import WritingImage from "../components/WritingImage";
import { useNavigate } from "react-router-dom";

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
                onClick={() => {
                  navigate(`/writing/${element.id}`);
                }}
              >
                <WritingImage></WritingImage>
                <CardTitle>{element.title}</CardTitle>
                <CardFooter>
                  <CardDate>{element.date}</CardDate>
                  <Author>by {element.author}</Author>
                </CardFooter>
              </Card>
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

const CardTitle = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 1.5rem;
  width: 100%;
  height: 20%;
  padding-top: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

const CardDate = styled.div`
  text-align: right;
  font-size: 0.75rem;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.color.dark100};
  margin-bottom: 0.5rem;
`;

const Author = styled.div`
  text-align: left;
  font-weight: 800;
  font-size: 1rem;
  width: 100%;
  height: auto;
  border-top: 1px solid ${({ theme }) => theme.color.bg100};
  padding: 0.75rem;
`;

export default MyPage;
