import styled from "styled-components";
import { useParams } from "react-router-dom";
import getOneWriting from "../api/getOneWriting";
import deleteWriting from "../api/deleteWriting";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { useNavigate } from "react-router-dom";
import remarkGfm from "remark-gfm";
import Button from "../components/Button";
import { Blockquote, Code } from "../assets/markdown/components";
import CommentBox from "../components/CommentBox";

function Writing() {
  let { id } = useParams();

  let [writing, setWriting] = useState<any>({});

  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.userProfile);

  useEffect(() => {
    const apiEndPoint = "api/get_one_writing";
    async function fetch() {
      const result = await getOneWriting(id, apiEndPoint);
      setWriting(result?.data);
    }

    fetch();
  }, []);

  function editThis() {
    navigate(`/edit/${writing.id}`);
  }

  function deleteThis() {
    let apiEndPoint = "api/delete_writing";
    deleteWriting(apiEndPoint, writing.id);
    alert("삭제되었습니다!");
    navigate(-1);
  }

  return (
    <Container>
      <WritingHeader>
        <Title>{writing.title}</Title>
        <Date>{writing.date}</Date>
        <Author>by .{writing.author}</Author>
      </WritingHeader>
      {user?.id == writing.auth ? (
        <AuthorMenu>
          <Button
            size="small"
            color="light"
            text="수정"
            margin="auto 10px auto auto"
            onClick={editThis}
          ></Button>
          <Button
            size="small"
            color="light"
            text="삭제"
            margin="none"
            onClick={deleteThis}
          ></Button>
        </AuthorMenu>
      ) : null}
      <Content>
        <ReactMarkdown
          components={{
            blockquote: Blockquote,
            code: Code,
          }}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        >
          {writing.content}
        </ReactMarkdown>
      </Content>
      <CommentBox></CommentBox>
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
  font-size: small;
  color: ${({ theme }) => theme.color.bg250};
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

const AuthorMenu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  & > button {
    :first-child {
      margin-left: 150px;
    }
  }
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
