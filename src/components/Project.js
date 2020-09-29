import React from "react";
import styled from "styled-components";

const ProjectBlock = styled.div`
  margin-top: 400px;
  max-width: 1400px;
  height: 800px;
  background: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
`;

function Project() {
  return <ProjectBlock>프로젝트 페이지 입니다.</ProjectBlock>;
}

export default Project;
