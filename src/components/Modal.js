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
  ::-webkit-scrollbar {
    bottom: 0;
    height: 5px; // 8px
    width: 8px;
    background-color: rgba(0, 0, 0, 0.05);
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  //position: relative;
  width: 800px;
  height: 50vh;
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
  .youtube_1 {
    width: 700px;
    height: 300px;
    @media (max-width: 768px) {
      width: 300px;
      height: 200px;
    }
  }
  .yotube_2_container {
    margin-top: 15px;
  }
  h3 {
    font-size: 32px;
    font-weight: bold;
    border: none !important;
    margin-bottom: 0;
    text-shadow: 3px 3px 3px rgb(0, 0, 0);

    @media (max-width: 768px) {
      font-size: 32px !important;
    }
  }

  h4 {
    font-size: 16px;
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

function Modal({
  title,
  content,
  site,
  whatidid,
  skill,
  github,
  youtube1,
  youtube2,
  onRemoveModal,
}) {
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
          {github !== "" ? (
            <div>
              <ImGithub />
              깃허브 바로가기
            </div>
          ) : null}
        </a>
        {youtube1 !== "" ? (
          <div className="yotube_1_container">
            <iframe
              className="youtube_1"
              src={youtube1}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
        {youtube2 !== "" ? (
          <div className="yotube_1_container">
            <iframe
              className="youtube_1"
              src={youtube2}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
        <h4>{content}</h4>
        {whatidid !== "" ? (
          <div>
            <h2>What I did?</h2>
            <h4>{whatidid}</h4>
          </div>
        ) : null}
        <div>
          <h2>Skill</h2>
          <h4>{skill}</h4>
        </div>
      </ModalBlock>
    </ModalBackground>
  );
}

export default Modal;
