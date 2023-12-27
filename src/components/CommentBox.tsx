import styled from "styled-components";
import Button from "./Button";
import useInput from "../utils/hooks/useInput";
import { FormEvent } from "react";
import { postComment } from "../api/comment";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CommentBox() {
  const [text, setText] = useInput({ comment: "" });
  const { comment } = text;

  const user = useSelector((state: RootState) => state.userProfile?.id);
  const { id } = useParams();

  function submitComment(e: FormEvent) {
    if (user != null) {
      const date = new Date();
      postComment(
        "api/post_comment",
        id,
        user,
        comment,
        date.toLocaleDateString()
      );
    } else {
      e.preventDefault();
      alert("로그인 하세요.");
    }
  }

  return (
    <Container>
      <Title>댓글</Title>
      <InputForm onSubmit={submitComment}>
        <Input
          name="comment"
          value={comment}
          onChange={setText}
          autoComplete="off"
        ></Input>
        <Button
          text="댓글 작성"
          size="mediumLarge"
          borderRadius="small"
          margin="none"
        ></Button>
      </InputForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin: 2rem 0;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: large;
  margin: 1rem;
`;

const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-end;
`;

const Input = styled.input`
  height: 100px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.bg200};
  font-size: large;
`;

export default CommentBox;
