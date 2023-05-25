import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getWritings from "../api/getWritings";
import styled from "styled-components";
import Button from "../components/Button";

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
    console.log(arr);
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
                onClick={() => {
                  navigate("/writings/4018");
                }}
              >
                <h1>{element.title}</h1>
                <h2>cotent</h2>
                <p>{element.content}</p>
                <p>author : {element.author}</p>
                <p>{element.date}</p>
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

interface Props {
  onClick?: any;
}

const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  cursor: pointer;

  :last-child {
    justify-self: flex-end;
  }
`;

export default Test;
