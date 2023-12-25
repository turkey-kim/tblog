import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import axios from "axios";
import "../../markdown.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ChatLoading from "../../components/ChatAI/ChatLoading";
import { scrollToBottom } from "../../utils";

interface RoleProps {
  role: string;
}

function ChatAI() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([
    {
      role: "system",
      content: "너는 능력있는 챗봇 비서야, 너의 이름은 Turkey",
    },
    {
      role: "system",
      content: "사용자가 물어본 질문에 대해서 최대한 정확하게 설명해줘",
    },
    {
      role: "system",
      content: "안녕하세요! 저는 AI비서 터키입니다. 무엇을 도와드릴까요?",
    },
  ]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const postMsg = async (e: React.FormEvent) => {
    e.preventDefault();

    // 사용자의 메시지를 대화 배열에 추가
    setConversation((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...conversation, { role: "user", content: input }],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // OpenAI에서 제공한 API 키로 대체
          },
        }
      );
      setLoading(false);

      // 챗지피티의 응답을 대화 배열에 추가
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.choices[0].message.content,
        },
      ]);
      setInput("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    scrollToBottom("chatContainer");
  }, [conversation]);

  return (
    <>
      <Container id="chatContainer">
        <StyledIntroWrapper>
          당신을 위한 AI비서 터키에게 무엇이든 물어보세요!
        </StyledIntroWrapper>
        {conversation.map((message, index) =>
          index > 1 ? (
            <StyledMsgWrapper role={message.role} key={index}>
              {message.role === "user" ? (
                <StyledRoleWrapper style={{ alignSelf: "" }}>
                  You
                </StyledRoleWrapper>
              ) : (
                <StyledRoleWrapper>Turkey</StyledRoleWrapper>
              )}
              <StyledMarkdown role={message.role} className="markdown-body">
                {message.content}
              </StyledMarkdown>
            </StyledMsgWrapper>
          ) : null
        )}
        {loading ? <ChatLoading /> : null}
      </Container>
      <StyledForm onSubmit={postMsg}>
        <StyledInput onChange={onChangeInput} value={input}></StyledInput>
        <StyledSubmit type="submit" text="submit" color="light" />
      </StyledForm>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 2rem 2rem 7rem 2rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
`;

const StyledIntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;
  font-weight: 800;
  font-size: 20px;
`;

const StyledMsgWrapper = styled.div<RoleProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.role === "user" ? "flex-end" : "flex-start"};
`;

const StyledForm = styled.form`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  border-top: 1px solid ${({ theme }) => theme.color.bg50};
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadow2};
`;

const StyledInput = styled.input`
  width: 50%;
`;

const StyledSubmit = styled(Button)``;

const StyledRoleWrapper = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const StyledMarkdown = styled(ReactMarkdown)<RoleProps>`
  width: fit-content;
  max-width: 80%;
  border-radius: 16px;
  padding: 1rem 2rem 1rem 2rem;
  margin: 1rem 0rem 2rem 1rem;
  background-color: ${(props) =>
    props.role === "user"
      ? ({ theme }) => theme.color.dark100
      : ({ theme }) => theme.color.white};
  color: ${(props) =>
    props.role === "user"
      ? ({ theme }) => theme.color.white
      : ({ theme }) => theme.color.black};

  border: 1px solid
    ${(props) =>
      props.role === "user" ? null : ({ theme }) => theme.color.bg200};

  box-shadow: ${({ theme }) => theme.shadow.shadow2};
`;

export default ChatAI;
