import { useState, useEffect } from "react";
import getPosts from "../api/getPosts";
import styled from "styled-components";

function Test() {
  let [arr, setArr] = useState<any>([{}]);

  useEffect(() => {
    async function posts() {
      const result = await getPosts("api/get_posts");
      // console.log(result?.data);
      setArr(result?.data);
    }
    posts();
    console.log(arr);
  }, []);

  return (
    <Container>
      <p>테스트페이지</p>
      <CardDeque>
        {arr.length != 0
          ? arr.map((element: any) => (
              <Card>
                <h1>{element.title}</h1>
                <h2>cotent</h2>
                <p>{element.content}</p>
                <p>author : {element.author}</p>
              </Card>
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;

  :last-child {
    justify-self: flex-end;
  }
`;

export default Test;
