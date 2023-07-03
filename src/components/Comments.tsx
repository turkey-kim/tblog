import styled from "styled-components";
import getComments from "../api/getComments";
import { useParams } from "react-router-dom";
import { ReactEventHandler, useEffect, useState } from "react";
import Button from "../components/Button";
import UserImage from "./UserImage";
import deleteComment from "../api/deleteComment";
import editComment from "../api/editComment";
import useInput from "../utils/hooks/useInput";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [editTarget, setEditTarget] = useState("");
  const [text, setText] = useInput({
    content: "",
  });
  let { content } = text;

  useEffect(() => {
    async function showComments() {
      const result = await getComments("api/get_comments", id);
      setComments(result?.data);
    }

    showComments();
  }, []);

  function editThis(id: any, content: string | undefined) {
    const date = new Date();
    editComment("api/edit_comment", id, content, date.toLocaleDateString());
  }

  function deleteThis(id: any) {
    deleteComment("api/delete_comment", id);
    window.location.reload();
  }

  return (
    <Container>
      {comments.length != 0
        ? comments.map((comment: any) => (
            <Comment>
              <Header>
                <UserImage size="small"></UserImage>
                <div>{comment.user}</div>
                <div>{comment.date}</div>
              </Header>
              <Body>
                {editTarget === comment._id ? (
                  <form
                    onSubmit={(e: any) => {
                      editThis(comment._id, content);
                    }}
                  >
                    <input
                      name="content"
                      value={content}
                      onChange={setText}
                    ></input>
                    <Button text="submit"></Button>
                  </form>
                ) : (
                  <p>{comment.content}</p>
                )}
              </Body>
              <Footer>
                <Button
                  margin="3px"
                  size="small"
                  text="수정"
                  onClick={() => {
                    setEditTarget(comment._id);
                  }}
                ></Button>
                <Button
                  margin="3px"
                  size="small"
                  text="삭제"
                  onClick={() => {
                    deleteThis(comment._id);
                  }}
                ></Button>
              </Footer>
            </Comment>
          ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
`;

const Comment = styled.div`
  display: flex;
  margin: 1vh;
  border-radius: 5px;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.color.bg200};
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid black;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
`;
const Footer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: flex-end;
`;

export default Comments;
