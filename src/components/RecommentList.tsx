import styled from "styled-components";
import UserImage from "./UserImage";
import Button from "./Button";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import deleteComment from "../api/deleteComment";
import editComment from "../api/editComment";
import { useState } from "react";

interface Props {
  user: any;
  date: any;
  content: any;
  id: any;
}
function RecommentList({ user, date, content, id }: Props) {
  const auth = useSelector((state: RootState) => state.userProfile?.id);
  let [openEdit, setOpenEdit] = useState(false);
  let [text, setText] = useState("");

  function deleteThis() {
    const apiEndPoint = "api/delete_recomment";
    deleteComment(apiEndPoint, id);
    window.location.reload();
  }

  function editThis() {
    const date = new Date();
    const apiEndpoint = "api/edit_recomment";
    editComment(apiEndpoint, id, text, date.toLocaleDateString());
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Comment>
      <Header>
        <UserImage size="small"></UserImage>
        <div>{user}</div>
        <div>{date}</div>
      </Header>
      <Body>
        {openEdit == true ? (
          <form onSubmit={editThis}>
            <input value={text} onChange={onChange}></input>
            <Button text="수정완료"></Button>
          </form>
        ) : (
          content
        )}
      </Body>
      <Footer>
        {auth == user ? (
          <>
            <Button
              text="수정"
              size="small"
              onClick={() => {
                setText(content);
                setOpenEdit(!openEdit);
              }}
            ></Button>
            <Button text="삭제" size="small" onClick={deleteThis}></Button>
          </>
        ) : null}
      </Footer>
    </Comment>
  );
}

const Comment = styled.div`
  display: flex;
  margin: 1vh;
  border-radius: 5px;
  flex-direction: column;
  width: 98%;
  justify-content: center;
  height: auto;
  background-color: ${({ theme }) => theme.color.dark100};
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

export default RecommentList;
