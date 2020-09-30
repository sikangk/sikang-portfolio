import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 70vh;
  background-size: cover;
  box-sizing: border-box;
  border: 3px solid black;
  cursor: pointer;
`;

function Slide({ img }) {
  return <Img src={img} />;
}

export default Slide;
