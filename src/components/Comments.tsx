import styled from "styled-components";
import getComments from "../api/getComments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import UserImage from "./UserImage";
import deleteComment from "../api/deleteComment";
import editComment from "../api/editComment";
import { RootState } from "../modules";
import { useSelector } from "react-redux";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  let [editTarget, setEditTarget] = useState("");
  let [text, setText] = useState("");

  const user = useSelector((state: RootState) => state.userProfile?.id);

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

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
                  <div>
                    <form
                      onSubmit={() => {
                        editThis(comment._id, text);
                      }}
                    >
                      <input
                        name="content"
                        value={text}
                        onChange={onChange}
                      ></input>
                      <Button text="수정완료"></Button>
                    </form>
                    <Button
                      text="취소"
                      onClick={() => {
                        setEditTarget("");
                      }}
                    ></Button>
                  </div>
                ) : (
                  <p>{comment.content}</p>
                )}
              </Body>
              {comment.user == user ? (
                <Footer>
                  <Button
                    margin="3px"
                    size="small"
                    text="수정"
                    onClick={() => {
                      setEditTarget(comment._id);
                      setText(comment.content);
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
              ) : (
                <Footer></Footer>
              )}
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
