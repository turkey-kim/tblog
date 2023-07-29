import styled from "styled-components";
import Button from "./Button";

interface Props {
  text?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit?: any;
  cancel?: any;
}

function EditInput({ text, onChange, onSubmit, cancel }: Props) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="recomment"
        autoComplete="off"
        value={text}
        onChange={onChange}
      ></Input>
      <Footer>
        <Button
          text="수정완료"
          borderRadius="small"
          color="green"
          size="small"
          margin="none"
        ></Button>
        <Button
          text="취소"
          borderRadius="small"
          color="light"
          size="small"
          margin="0 5px"
          onClick={cancel}
        ></Button>
      </Footer>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 10px 0;
`;

const Input = styled.input`
  height: 80px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.bg150};
  font-size: large;
`;

const Footer = styled.div`
  display: flex;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  align-items: flex-end;
  justify-content: right;
`;

export default EditInput;
