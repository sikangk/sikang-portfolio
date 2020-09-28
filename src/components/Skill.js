import React from "react";
import styled from "styled-components";

const SkillBlock = styled.div`
  margin-top: 400px;
  max-width: 1400px;
  height: 800px;
  background: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Skill() {
  return <SkillBlock>스킬 페이지 입니다.</SkillBlock>;
}

export default Skill;
