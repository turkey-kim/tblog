import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Home() {
  let [content, setContent] = useState("");
  let [arr, setArr] = useState<string[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("contents")) {
      localStorage.setItem("contents", JSON.stringify([]));
    }
    let x: any = localStorage.getItem("contents");
    x = JSON.parse(x);
    setArr(x);
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    let arrClone: string[] = [...arr];
    arrClone.push(content);
    setArr(arrClone);
    localStorage.setItem("contents", JSON.stringify(arrClone));
    setContent("");
  };

  return (
    <div style={{ flexDirection: "column", justifyContent: "center" }}>
      <p>This is Main page!</p>
      <WritingForm>
        <WritingSpace
          id="writingSpace"
          placeholder=" Write anything what you want"
          onChange={onChangeInput}
          value={content == "" ? "" : content}
        ></WritingSpace>
        <SubmitButton onClick={onClickSubmit}>글발행</SubmitButton>
      </WritingForm>
      <CardDeque>
        {arr.map((text, i) => {
          return (
            <Card>
              <h1>No.{i + 1}</h1>
              <p>{text}</p>
            </Card>
          );
        })}
      </CardDeque>
    </div>
  );
}

const WritingForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const WritingSpace = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background-color: white;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.bg150};
  border: none;
  border-radius: 3px;
  margin-left: 3px;
  font-size: small;
  font-weight: 600;

  :hover {
    background-color: ${({ theme }) => theme.color.bg200};
  }
`;

const CardDeque = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.bg150};
  border-radius: 5px;
`;

export default Home;
