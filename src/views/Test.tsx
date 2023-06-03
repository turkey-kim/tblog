import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getWritings from "../api/getWritings";
import styled from "styled-components";
import Button from "../components/Button";
import WritingImage from "../components/WritingImage";
import Card from "../components/Card";

function Test() {
  let [arr, setArr] = useState<any>([{}]);
  let navigate = useNavigate();

  useEffect(() => {
    async function posts() {
      const result = await getWritings("api/get_writings");
      // console.log(result?.data);
      setArr(result?.data);
    }
    posts();
  }, []);

  return (
    <Container>
      <p>테스트페이지</p>
      <Button text="test" color="light"></Button>
      <Button text="test2" color="dark"></Button>
      <Button text="test2" color="dark" size="small"></Button>
      <Button text="test2" color="dark" size="large"></Button>
      <Button text="test2" color="light" size="small"></Button>
      <Button text="test2" color="light" size="large"></Button>
      <CardDeque>
        {arr.length != 0
          ? arr.map((element: any) => (
              <Card
                id={element.id}
                title={element.title}
                date={element.date}
                author={element.author}
                image={<WritingImage></WritingImage>}
              ></Card>
            ))
          : null}
      </CardDeque>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CardDeque = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default Test;
