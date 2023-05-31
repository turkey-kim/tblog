import Button from "../components/Button";
import icon404 from "../assets/icons/error-404.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <Container>
      <Image></Image>
      <TextBox>
        <Title>찾을 수 없는 페이지입니다</Title>
        <Subtitle>
          요청하신 페이지가 사라졌거나, 잘못된 경로를 요청하셨어요
        </Subtitle>
        <Button
          size="large"
          text="홈페이지로 돌아가기"
          margin="20px"
          onClick={goHome}
        ></Button>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    gap: none;
  }
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  content: url(${icon404});

  @media ${({ theme }) => theme.device.mobile} {
    width: 50%;
    height: auto;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: xx-large;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: x-large;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Subtitle = styled.p`
  font-weight: 700;
  font-size: large;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: medium;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export default NotFound;
