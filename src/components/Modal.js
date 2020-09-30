import React from "react";
import styled, { keyframes } from "styled-components";
import { ImLink, ImGithub } from "react-icons/im";

const fadeIn = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}
`;

const slideUp = keyframes`
from{
    transform:translateY(200px);
}
to{
    transform:translateY(0px);
}
`;

const ModalBackground = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const ModalBlock = styled.div`
  position: relative;
  max-width: 500px;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: white;
  border-radius: 16px;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  h4 {
    font-size: 24px;
    margin: 30px 30px;
  }
  a {
    margin-top: 5px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  button {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background: rgba(0, 0, 0, 0);
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

function Modal({ title, content, site, github, onRemoveModal }) {
  return (
    <ModalBackground>
      <ModalBlock>
        <h3>{title}</h3>
        <a href={site} target="_blank" rel="noopener noreferrer">
          <ImLink />
          사이트 바로가기
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <ImGithub />
          깃허브 바로가기
        </a>
        <h4>{content}</h4>

        <button onClick={onRemoveModal}>닫기</button>
      </ModalBlock>
    </ModalBackground>
  );
}

export default Modal;
