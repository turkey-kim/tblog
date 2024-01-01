import { useState, useRef } from "react";
import styled from "styled-components";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import Button from "../components/Button";
import { postWriting, uploadImage } from "../api/writing";
import useInput from "../utils/hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { FileDrop } from "react-file-drop";
import { SERVER_API_ADDRESS } from "../constants/link";
import {
  useMutation,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";

const Post = () => {
  const [markdown, setMarkdown] = useState("");
  let [text, setText] = useInput({ title: "" });
  let { title } = text;

  const user = useSelector((state: RootState) => state.userProfile);

  const targetRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onChangeValue = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    setMarkdown(value ?? "");
  };

  const postMutation = useMutation({
    mutationFn: async () => {
      const date = new Date();
      return await postWriting(
        title,
        user?.nickname,
        markdown,
        date.toLocaleDateString(),
        user?.id
      );
    },
    onSuccess: () => {
      console.log("글 발행 성공");
      queryClient.invalidateQueries({
        queryKey: ["getWriting"],
      });
      navigate("/mypage");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handlePost = () => {
    postMutation.mutate();
  };

  async function upload(files: FileList, formData: FormData) {
    console.log(formData);
    const file = await uploadImage("api/uploadFile", formData);
    const imageName = file?.data.imagePath;
    console.log(imageName);

    let newValue =
      "\n\n ![" + files[0].name + `](${SERVER_API_ADDRESS}/` + imageName + ")";

    onChangeValue(markdown + newValue);
  }

  return (
    <Container data-color-mode="light" ref={targetRef}>
      <Title
        name="title"
        placeholder="발행하실 글의 제목을 입력하세요"
        value={title}
        onChange={setText}
      ></Title>
      <div style={{ width: "100%" }}>
        <div className="wmde-markdown-var"></div>
        <FileDrop
          onDrop={(files, event) => {
            if (files != null) {
              const formData = new FormData();
              formData.append("image", files[0]);
              if (files[0].size >= 5000000) {
                alert("사진 용량이 너무 큽니다.");
              } else {
                upload(files, formData);
              }
            }
          }}
        >
          <MDEditor value={markdown} onChange={onChangeValue} height={1100} />
        </FileDrop>
      </div>
      <ButtonContainer>
        <Button text="발행" size="medium" onClick={handlePost}></Button>
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
  padding: 15px;
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

export default Post;
