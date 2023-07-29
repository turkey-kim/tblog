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
import ReCommentBox from "./ReCommentBox";
import RecommentList from "./RecommentList";
import EditInput from "./EditInput";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [recomments, setRecomments] = useState([]);
  let [editTarget, setEditTarget] = useState("");
  let [openRecomment, setOpenRecomment] = useState("");
  let [text, setText] = useState("");

  const user = useSelector((state: RootState) => state.userProfile?.id);

  useEffect(() => {
    async function showComments() {
      const result = await getComments("api/get_comments", id);
      const result2 = await getComments("api/get_recomments", id);
      setComments(result?.data);
      setRecomments(result2?.data);
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
            <>
              <Comment>
                <Header>
                  <UserInfo>
                    <UserImage size="small"></UserImage>
                    <SubInfo>
                      <User>{comment.user}</User>
                      <CommentDate>{comment.date}</CommentDate>
                    </SubInfo>
                  </UserInfo>
                  {comment.user == user ? (
                    <EditMenu>
                      <SubButton
                        onClick={() => {
                          setEditTarget(comment._id);
                          setText(comment.content);
                        }}
                      >
                        수정
                      </SubButton>
                      <SubButton
                        onClick={() => {
                          deleteThis(comment._id);
                        }}
                      >
                        삭제
                      </SubButton>
                    </EditMenu>
                  ) : null}
                </Header>
                <Body>
                  {editTarget === comment._id ? (
                    <EditInput
                      text={text}
                      onChange={onChange}
                      onSubmit={() => {
                        editThis(comment._id, text);
                      }}
                      cancel={() => {
                        setEditTarget("");
                      }}
                    ></EditInput>
                  ) : (
                    <p>{comment.content}</p>
                  )}
                </Body>
                {openRecomment == comment._id ? (
                  <Footer>
                    <Button
                      text="답글 닫기"
                      color="green"
                      size="small"
                      margin="none"
                      borderRadius="small"
                      onClick={() => {
                        setOpenRecomment("");
                      }}
                    ></Button>
                  </Footer>
                ) : (
                  <Footer>
                    <Button
                      text="답글 열기"
                      color="green"
                      size="small"
                      margin="none"
                      borderRadius="small"
                      onClick={() => {
                        setOpenRecomment(comment._id);
                      }}
                    ></Button>
                  </Footer>
                )}
              </Comment>
              {openRecomment == comment._id ? (
                <ReComment>
                  {recomments.map((recomment: any) =>
                    recomment.parentId == comment._id ? (
                      <RecommentList
                        user={recomment.user}
                        date={recomment.date}
                        content={recomment.content}
                        id={recomment._id}
                      ></RecommentList>
                    ) : null
                  )}
                  <ReCommentBox parentId={openRecomment}></ReCommentBox>
                </ReComment>
              ) : null}
            </>
          ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem auto;
  align-items: center;
`;

const Comment = styled.div`
  display: flex;
  margin: 2rem 0 1rem 0;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
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
  justify-content: flex-start;
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
  background-color: ${({ theme }) => theme.color.bg50};

  :hover {
    color: ${({ theme }) => theme.color.green};
  }
`;

const ReComment = styled.div`
  display: flex;
  margin: 1vh;
  border-radius: 5px;
  flex-direction: column;
  align-items: flex-end;
  width: 95%;
  height: auto;
  background-color: ${({ theme }) => theme.color.bg100};
  border: 1px solid ${({ theme }) => theme.color.bg150};
`;

export default Comments;
