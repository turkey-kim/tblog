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
      <MDEditor value={markdown} onChange={onChangeValue} />
      {/* <MDEditor.Markdown source={markdown} style={{ whiteSpace: "pre-wrap" }} /> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default EditPost;
