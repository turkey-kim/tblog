import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

function Writing() {
  let { id } = useParams();

  let test = () => {
    console.log(id);
  };
  return (
    <Container>
      <WritingHeader>
        <Title>제목이올시다</Title>
        <Date>저는유 날짜이여유~</Date>
        <Author>내가 저자이올시다</Author>
      </WritingHeader>
      <h1>Test</h1>
      <br />
      <br />
      <Button onClick={test} text="test"></Button>
      <p>현재 페이지의 파라미터는 {id} 입니다.</p>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 900px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WritingHeader = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.color.dark100};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: xx-large;
  background-color: ${({ theme }) => theme.color.bg200};
`;

const Date = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: large;
  font-weight: 700;
  background-color: lightGreen;
`;

const Author = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: large;
  font-weight: 700;
  background-color: red;
`;

export default Writing;
