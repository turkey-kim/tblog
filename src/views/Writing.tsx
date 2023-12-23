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
import { Blockquote, Code, P, H1, H2 } from "../assets/markdown/components";
import CommentBox from "../components/CommentBox";
import Comments from "../components/Comments";

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
            h1: H1,
            h2: H2,
            blockquote: Blockquote,
            code: Code,
            p: P,
            img: ({ node, ...props }) => (
              <img style={{ maxWidth: "100%" }} {...props} alt="" />
            ),
          }}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        >
          {writing.content}
        </ReactMarkdown>
      </Content>
      <CommentWrapper>
        <CommentBox></CommentBox>
        <Comments></Comments>
      </CommentWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: right;
`;

const WritingHeader = styled.div`
  width: 100%;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.bg200};
`;

const Title = styled.div`
  width: auto;
  height: 250px;
  display: flex;
  align-items: center;
  text-align: left;
  font-weight: 700;
  font-size: 3rem;
  margin: 1rem;
`;

const Date = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
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
  margin: 5rem 1rem;
  font-size: large;
  font-weight: 700;
  text-align: left;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`;

export default Writing;
