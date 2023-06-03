import { ReactElement } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  id: any;
  title: any;
  date: any;
  author: any;
  image?: ReactElement;
}

function CardComponent({ id, title, date, author, image }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/writing/${id}`);
      }}
    >
      {image}
      <CardTitle>{title}</CardTitle>
      <CardFooter>
        <CardDate>{date}</CardDate>
        <Author>by {author}</Author>
      </CardFooter>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  justify-content: space-between;
  cursor: pointer;
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

export default CardComponent;
