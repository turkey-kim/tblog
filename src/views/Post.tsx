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
      <div className="wmde-markdown-var"></div>
      {targetOn ? (
        <MDEditor value={markdown} onChange={onChangeValue} height={700} />
      ) : (
        <MDEditor
          value={markdown}
          onChange={onChangeValue}
          height={700}
          style={{ zIndex: -1 }}
        />
      )}
      <Button text="발행"></Button>
      {/* <MDEditor.Markdown source={markdown} style={{ whiteSpace: "pre-wrap" }} /> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default EditPost;
