import React from "react";
import styled, { keyframes } from "styled-components";
import { ImLink, ImGithub } from "react-icons/im";
import { AiFillCloseSquare } from "react-icons/ai";

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
  overflow: hidden;
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
  z-index: 1;
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
  overflow: auto;

  @media (max-width: 768px) {
    width: 300px;
    height: 50vh;
  }
  h3 {
    font-size: 48px;
    font-weight: bold;
    border: none !important;
    margin-bottom: 0;
    text-shadow: 3px 3px 3px rgb(0, 0, 0);

    @media (max-width: 768px) {
      font-size: 32px !important;
    }
  }

  h4 {
    font-size: 24px;
    border-top: 1px solid black;
    margin: 40px 30px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  a {
    margin-top: 10px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  .button {
    font-size: 50px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    border: none;
    right: 0;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

function Modal({ title, content, site, github, onRemoveModal }) {
  return (
    <ModalBackground>
      <ModalBlock>
        <div className="button" onClick={onRemoveModal}>
          <AiFillCloseSquare />
        </div>
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
      </ModalBlock>
    </ModalBackground>
  );
}

export default Modal;
