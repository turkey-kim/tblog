import styled from "styled-components";
import image from "../assets/icons/writing.jpg";
import { JsxElement } from "typescript";
import { ReactElement } from "react-markdown/lib/react-markdown";

function writingImage(): ReactElement {
  return (
    <ImageContainer>
      <Image></Image>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  cursor: pointer;

  content: url(${image});
`;

export default writingImage;
