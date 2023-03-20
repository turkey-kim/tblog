import styled from "styled-components";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";

const DUMMY_POST = "### Hello world";

const Post = () => {
  return (
    <Container>
      <MDEditor.Markdown
        source={DUMMY_POST}
        style={{ height: "100vh", whiteSpace: "pre-wrap" }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Post;
