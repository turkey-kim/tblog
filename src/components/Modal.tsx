import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function Modal() {
  return (
    <>
      <ModalContainer>
        <ModalbackGround>sds</ModalbackGround>
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100;
`;

const ModalbackGround = styled.div`
  z-index: 1;
  position: fixed; // 화면고정
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0, 4);
`;

export default Modal;
