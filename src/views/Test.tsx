import styled from "styled-components";
import "../markdown.css";

interface RoleProps {
  role: string;
}

function Test() {
  return <Container>테스트 페이지!</Container>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  min-height: 100vh;
  padding: 2rem 2rem 5rem 2rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
`;

export default Test;
