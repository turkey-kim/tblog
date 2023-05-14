import { useState } from "react";
import styled from "styled-components";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";

const EditPost = () => {
  const [markdown, setMarkdown] = useState("");

  const onChangeValue = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    setMarkdown(value ?? "");
  };

  return (
    <Container data-color-mode="light">
      <div className="wmde-markdown-var"></div>
      <MDEditor value={markdown} onChange={onChangeValue} height={700} />
      {/* <MDEditor.Markdown source={markdown} style={{ whiteSpace: "pre-wrap" }} /> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default EditPost;
