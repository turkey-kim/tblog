import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getWritings from "../api/getWritings";
import styled from "styled-components";
import Button from "../components/Button";
import WritingImage from "../components/Writing";

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
                onClick={() => {
                  navigate(`/writing/${element.id}`);
                }}
              >
                <WritingImage></WritingImage>
                <CardTitle>{element.title}</CardTitle>
                <CardFooter>
                  <CardDate>{element.date}</CardDate>
                  <Author>by {element.author}</Author>
                </CardFooter>
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
  justify-content: space-between;
  cursor: pointer;

  :last-child {
    justify-self: flex-end;
  }
`;

const CardTitle = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 1.5rem;
  width: 100%;
  height: 20%;
  padding-top: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

const CardDate = styled.div`
  text-align: right;
  font-size: 0.75rem;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.color.dark100};
  margin-bottom: 0.5rem;
`;

const Author = styled.div`
  text-align: left;
  font-weight: 800;
  font-size: 1rem;
  width: 100%;
  height: auto;
  border-top: 1px solid ${({ theme }) => theme.color.bg100};
  padding: 0.75rem;
`;

export default Test;
