import styled from "styled-components";
import Button from "./Button";
import useInput from "../utils/hooks/useInput";
import postComment from "../api/postComment";
import { useParams } from "react-router-dom";
import { RootState } from "../modules";
import { useSelector } from "react-redux";

const ReCommentBox = (props: any) => {
  const { id } = useParams();
  const user = useSelector((state: RootState) => state.userProfile?.id);
  let [text, setText] = useInput({
    recomment: "",
  });
  let { recomment } = text;

  function submit() {
    const apiEndpoint = "api/post_recomment";
    const date = new Date();
    postComment(
      apiEndpoint,
      id,
      user,
      recomment,
      date.toLocaleDateString(),
      props.parentId
    );
  }

  return (
    <InputForm onSubmit={submit}>
      <Input name="recomment" value={recomment} onChange={setText}></Input>
      <Button text="댓글 작성" color="dark"></Button>
    </InputForm>
  );
};

const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Input = styled.input`
  height: 100px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.dg150};
  font-size: large;
`;

export default ReCommentBox;
