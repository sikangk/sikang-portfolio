import React from "react";
import styled, { keyframes } from "styled-components";
const reveal = keyframes`
 80%{
      letter-spacing: 3px;
    }
    100% {
      background-size: 300% 300%;
    }
  `;
const glow = keyframes`
   40% {
      text-shadow: 0 0 3px #000;
    }`;
const MainBlock = styled.div`
  max-width: 1400px;
  height: 800px;
  background: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .content {
    background: 50% 100% / 50% 50% no-repeat
      radial-gradient(ellipse at bottom, #000, transparent, transparent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 8vw;
    text-align: center;
    text-shadow: 3px 3px 3px rgb(0, 0, 0);

    animation: ${reveal} 3000ms ease-in-out forwards 200ms,
      ${glow} 2500ms linear infinite 3000ms;
  }
  p {
    font-weight: bold;
  }
`;

function Main() {
  return (
    <MainBlock>
      <div className="content">SIKANG's PORTFOLIO</div>
      <p>곽시강 개인 포트폴리오 사이트입니다.</p>
    </MainBlock>
  );
}

export default Main;
