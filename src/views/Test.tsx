import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import Button from "../components/Button";

function Test() {
  const [input, setInput] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(input);
    setInput("");
  };

  return (
    <Container>
      <p>챗지피티 테스트</p>
      <Button text="test" color="light"></Button>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput onChange={onChangeInput} value={input}></StyledInput>
        <StyledSubmit type="submit" text="submit" color="light" />
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const StyledForm = styled.form``;
const StyledInput = styled.input`
  width: 50%;
`;

const StyledSubmit = styled(Button)``;

export default Test;
