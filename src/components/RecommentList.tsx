import styled from "styled-components";
import UserImage from "./UserImage";
import Button from "./Button";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import { editComment, deleteComment } from "../api/comment";
import { useState } from "react";
import EditInput from "./EditInput";

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

  function cancelEdit(e: any) {
    e.preventDefault();
    setOpenEdit(false);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Comment>
      <Header>
        <UserInfo>
          <UserImage size="small"></UserImage>
          <SubInfo>
            <User>{user}</User>
            <CommentDate>{date}</CommentDate>
          </SubInfo>
        </UserInfo>
        {auth == user ? (
          <EditMenu>
            <SubButton
              onClick={() => {
                setText(content);
                setOpenEdit(!openEdit);
              }}
            >
              수정
            </SubButton>
            <SubButton onClick={deleteThis}>삭제</SubButton>
          </EditMenu>
        ) : null}
      </Header>
      <Body>
        {openEdit == true ? (
          <EditInput
            text={text}
            onChange={onChange}
            onSubmit={editThis}
            cancel={cancelEdit}
          ></EditInput>
        ) : (
          content
        )}
      </Body>
      <Footer></Footer>
    </Comment>
  );
}

const Comment = styled.div`
  display: flex;
  margin: 1rem 0;
  border-radius: 5px;
  flex-direction: column;
  width: 98%;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: ${({ theme }) => theme.color.bg100};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

const Body = styled.div`
  width: 95%;
  height: auto;
  text-align: left;
  margin: 20px 0;
  font-size: medium;
`;

const Footer = styled.div`
  display: flex;
  width: 95%;
  height: auto;
  justify-content: flex-end;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: auto;
  align-items: center;
  margin: 10px;
`;

const SubInfo = styled.div`
  display: flex;
  flex-direction: Column;
  margin-left: 10px;
`;

const User = styled.div`
  display: flex;
  font-weight: 600;
  font-size: medium;
  margin-bottom: 2px;
`;

const CommentDate = styled.div`
  display: flex;
  font-size: smaller;
  color: ${({ theme }) => theme.color.dark150};
`;

const EditMenu = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  margin: 5px;
`;

const SubButton = styled.button`
  font-size: small;
  border: none;
  margin-top: 7px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.bg100};

  :hover {
    color: ${({ theme }) => theme.color.green};
  }
`;

export default RecommentList;
