import styled from "styled-components";
import { useParams } from "react-router-dom";
import getOneWriting from "../api/getOneWriting";
import { useEffect, useState } from "react";
import {
  PluggableList,
  ReactMarkdown,
} from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

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
        <Author>by .{writing.author}</Author>
      </WritingHeader>
      <p>현재 페이지의 파라미터는 {id} 입니다.</p>
      <Content>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {writing.content}
        </ReactMarkdown>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: right;
`;

const WritingHeader = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: ${({ theme }) => theme.color.dark100}; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: left;
  font-weight: 700;
  font-size: 4rem;
  /* background-color: ${({ theme }) => theme.color.bg200}; */
`;

const Date = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: large;
  font-weight: 700;
  /* background-color: lightGreen; */
`;

const Author = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: large;
  font-weight: 700;
  /* background-color: red; */
`;

const Content = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding-top: 50px;
  font-size: large;
  font-weight: 700;
  /* background-color: lightGreen; */
  text-align: left;
`;

export default Writing;
