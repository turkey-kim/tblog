import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getOneWriting } from "../api/writing";
import { deleteWriting } from "../api/writing";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { useNavigate } from "react-router-dom";
import remarkGfm from "remark-gfm";
import Button from "../components/Button";
import CommentBox from "../components/CommentBox";
import Comments from "../components/Comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "../markdown.css";

function Writing() {
  let { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userProfile);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [`getWriting`, { id: id }],
    queryFn: async () => {
      const apiEndPoint = "api/get_one_writing";
      return await getOneWriting(id, apiEndPoint);
    },
    staleTime: Infinity,
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const apiEndPoint = "api/delete_writing";
      return await deleteWriting(apiEndPoint, data.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getWriting"],
      });
      alert("삭제되었습니다!");
      navigate(-1);
    },

    onError: (err) => {
      console.error(err);
    },
  });

  const editThis = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  return (
    <Container>
      <WritingHeader>
        <Title>{data?.title}</Title>
        <Date>{data?.date}</Date>
        <Author>by .{data?.author}</Author>
      </WritingHeader>
      {user?.id == data?.auth ? (
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
            onClick={handleDelete}
          ></Button>
        </AuthorMenu>
      ) : null}
      <Content>
        <ReactMarkdown
          className="markdown-body"
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        >
          {data?.content}
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
