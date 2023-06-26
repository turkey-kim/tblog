import styled from "styled-components";
import Button from "./Button";
import useInput from "../utils/hooks/useInput";
import { FormEvent } from "react";
import postComment from "../api/postComment";

function Comment() {
  const [text, setText] = useInput({ comment: "" });
  const { comment } = text;

  function submitComment(e: FormEvent) {}
  return (
    <Container>
      <InputForm onSubmit={submitComment}>
        <Input name="comment" value={comment} onChange={setText}></Input>
        <Button text="댓글 작성" size="medium" color="light"></Button>
      </InputForm>
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
  margin-bottom: 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.bg200};
  font-size: large;
`;

export default Comment;
