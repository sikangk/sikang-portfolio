import React from "react";
import styled from "styled-components";

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
  border-bottom: 1px solid black;

  h1 {
    text-align: center;
    font-size: 80px;
  }
`;

function Main() {
  return (
    <MainBlock>
      <h1>KSK PORTFOLIO</h1>
      <div>곽시강 개인 포트폴리오 사이트 입니다.</div>
    </MainBlock>
  );
}

export default Main;
