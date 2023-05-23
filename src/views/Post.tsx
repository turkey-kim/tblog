import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import Button from "../components/Button";

const EditPost = () => {
  const [markdown, setMarkdown] = useState("");

  const onChangeValue = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    setMarkdown(value ?? "");
  };

  const [headerClick, setHeaderClick] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", containerOutSideClick);
    return () => {
      document.removeEventListener("mousedown", containerOutSideClick);
    };
  });

  const containerOutSideClick = (e: any) => {
    if (!container.current?.contains(e.target)) {
      setHeaderClick(true);
    }
  };

  return (
    <Container
      data-color-mode="light"
      ref={container}
      onClick={() => {
        setHeaderClick(false);
      }}
    >
      <div className="wmde-markdown-var"></div>
      {headerClick ? (
        <MDEditor
          value={markdown}
          onChange={onChangeValue}
          height={700}
          style={{ zIndex: -1 }}
        />
      ) : (
        <MDEditor value={markdown} onChange={onChangeValue} height={700} />
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
