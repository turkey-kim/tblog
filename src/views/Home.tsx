import styled from "styled-components";
import { getWritings } from "../api/writing";
import WritingImage from "../components/WritingImage";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";

interface Writing {
  id: string;
  title: string;
  date: string;
  author: string;
  // Add other properties as needed
}

function Home() {
  const { data } = useQuery<Writing[]>({
    queryKey: ["getList"],
    queryFn: async () => {
      return await getWritings("api/get_writings");
    },
    staleTime: Infinity,
  });

  return (
    <Container>
      <ContainerHeader></ContainerHeader>
      <CardDeque>
        {data
          ? data.map((element: any) => (
              <Card
                key={element.id}
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
  height: 100vh;
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
