import styled from "styled-components";
import getWritings from "../api/getWritings";
import { useState, useEffect } from "react";
import WritingImage from "../components/WritingImage";
import Card from "../components/Card";

function Home() {
  let [arr, setArr] = useState<any>([{}]);

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
      <ContainerHeader></ContainerHeader>
      <CardDeque>
        {arr.length != 0
          ? arr.map((element: any) => (
              <Card
                id={element.id}
                title={element.title}
                date={element.date}
                author={element.author}
                image={<WritingImage />}
              ></Card>
            ))
          : null}
      </CardDeque>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 10vh;
`;

const CardDeque = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default Home;
