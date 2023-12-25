import styled from "styled-components";
import { Hourglass } from "react-loader-spinner";

const ChatLoading = () => {
  return (
    <StyledMsgWrapper>
      <StyledRoleWrapper>Turkey</StyledRoleWrapper>
      <StyledLoadingBox>
        <Hourglass colors={["#585858", "#404040"]} />
        <StyledText>
          터키가 답변을 준비중입니다 잠시만 기다려주세요...
        </StyledText>
      </StyledLoadingBox>
    </StyledMsgWrapper>
  );
};

export default ChatLoading;

const StyledMsgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: "flex-start";
`;

const StyledRoleWrapper = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const StyledLoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 150px;
  border-radius: 16px;
  padding: 2rem 2rem 1rem 2rem;
  margin: 1rem 0rem 2rem 1rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.bg200};
  box-shadow: ${({ theme }) => theme.shadow.shadow2};
`;

const StyledText = styled.span`
  padding-top: 1rem;
`;
