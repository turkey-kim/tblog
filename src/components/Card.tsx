import { ReactElement } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { truncateString } from "../utils";

interface Props {
  id: any;
  title: string;
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
      <CardTitle>{truncateString(title, 35)}</CardTitle>
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
  box-shadow: 1px 1px 2px 2px ${({ theme }) => theme.color.bg150};
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
  padding-right: 5px;
  font-size: 0.75rem;
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.color.dark100};
  margin-bottom: 0.5rem;
`;

const Author = styled.div`
  text-align: left;
  font-weight: 800;
  font-size: 1rem;
  width: auto;
  height: auto;
  border-top: 1px solid ${({ theme }) => theme.color.bg150};
  padding: 0.75rem;
`;

export default CardComponent;
