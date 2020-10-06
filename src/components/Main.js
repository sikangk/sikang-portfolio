import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import sky from "../image/sky.jpg";
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
      text-shadow: 0 0 0px #fff;
    }`;
const MainBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .bg-wrap {
    width: 100%;
    height: 100%;
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
  }

  .bg {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background: url(${sky});
    background-repeat: no-repeat;

    .contentBlock {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 300px;
      text-align: center;

      p {
        font-weight: bold;
        color: #fff;
        text-shadow: 0px 0px 0px rgb(0, 0, 0);
      }
    }
  }
`;

function Main() {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MainBlock>
      <div className="bg-wrap">
        <div className="bg">
          <div
            className="contentBlock"
            style={{
              opacity: scroll.y > 140 ? "0.1" : "1",
            }}
          >
            <div className="content">SIKANG's PORTFOLIO</div>
            <p>곽시강 개인 포트폴리오 사이트입니다.</p>
          </div>
        </div>
      </div>
    </MainBlock>
  );
}

export default Main;
