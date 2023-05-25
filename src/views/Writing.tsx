import styled from "styled-components";
import { useParams } from "react-router-dom";
import getOneWriting from "../api/getOneWriting";
import { useEffect, useState } from "react";

function Writing() {
  let { id } = useParams();

  let [writing, setWriting] = useState<any>({});

  useEffect(() => {
    const apiEndPoint = "api/get_one_writing";
    async function fetch() {
      const result = await getOneWriting(id, apiEndPoint);
      setWriting(result?.data);
    }

    fetch();
  }, []);

  return (
    <Container>
      <WritingHeader>
        <Title>{writing.title}</Title>
        <Date>{writing.date}</Date>
        <Author>{writing.author}</Author>
      </WritingHeader>
      <h1>Test</h1>
      <p>{writing.content}</p>
      <br />
      <br />
      <p>현재 페이지의 파라미터는 {id} 입니다.</p>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 900px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WritingHeader = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.color.dark100};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: xx-large;
  background-color: ${({ theme }) => theme.color.bg200};
`;

const Date = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: large;
  font-weight: 700;
  background-color: lightGreen;
`;

const Author = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: large;
  font-weight: 700;
  background-color: red;
`;

export default Writing;
