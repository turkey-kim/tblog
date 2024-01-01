import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import Button from "../components/Button";
import useMousedown from "../utils/hooks/useMousedown";
import { editWriting, getOneWriting } from "../api/writing";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const EditPost = () => {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const apiEndPoint = "api/get_one_writing";
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [`getWriting`, { id: id }],
    queryFn: async () => {
      return await getOneWriting(id, apiEndPoint);
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    if (user?.id != data?.auth) navigate("/");
    setMarkdown(data?.content);
    setTitle(data?.title);
  }, [data]);

  const postMutation = useMutation({
    mutationFn: async () => {
      const date = new Date();
      await editWriting(
        id,
        title,
        user?.nickname,
        markdown,
        date.toLocaleDateString(),
        user?.id
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`getWriting`],
      });
      navigate(`/writing/${id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const user = useSelector((state: RootState) => state.userProfile);

  const targetRef = useRef<HTMLDivElement>(null);
  const [targetOn] = useMousedown(targetRef);
  const navigate = useNavigate();

  const onChangeValue = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    setMarkdown(value ?? "");
  };

  const handleEditPost = () => {
    postMutation.mutate();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Container data-color-mode="light" ref={targetRef}>
      <Title
        name="title"
        placeholder="수정하실 글의 제목을 입력하세요"
        value={title}
        onChange={onChange}
      ></Title>
      <div className="wmde-markdown-var"></div>
      {targetOn ? (
        <MDEditor
          value={markdown}
          onChange={onChangeValue}
          height={1000}
          style={{ width: "100%" }}
        />
      ) : (
        <MDEditor
          value={markdown}
          onChange={onChangeValue}
          height={1000}
          style={{ width: "100%", zIndex: -1 }}
        />
      )}
      <ButtonContainer>
        <Button text="수정완료" size="medium" onClick={handleEditPost}></Button>
      </ButtonContainer>
      {/* <MDEditor.Markdown source={markdown} style={{ whiteSpace: "pre-wrap" }} /> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.input`
  width: 99%;
  height: 8vh;
  margin: 3px;
  border: none;
  outline: none;
  font-size: larger;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  position: fixed;
  bottom: 15px;
  right: 20px;
`;

export default EditPost;
