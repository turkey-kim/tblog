import { useState, useRef } from "react";
import styled from "styled-components";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import Button from "../components/Button";
import useMousedown from "../utils/hooks/useMousedown";

const EditPost = () => {
  const [markdown, setMarkdown] = useState("");
  const targetRef = useRef<HTMLDivElement>(null);
  const [targetOn] = useMousedown(targetRef);

  const onChangeValue = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    setMarkdown(value ?? "");
  };

  return (
    <Container data-color-mode="light" ref={targetRef}>
      <Title placeholder="발행하실 글의 제목을 입력하세요"></Title>
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
        <Button text="발행" size="medium"></Button>
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
