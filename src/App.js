import React from "react";
import { createGlobalStyle } from "styled-components";

import Main from "./components/Main";
import Intro from "./components/Intro";
import Skill from "./components/Skill";
import MenuBar from "./components/MenuBar";

const GlobalStyle = createGlobalStyle`
body{
  background:black;
  box-sizing:border-box;
  
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MenuBar />
      <div id="Home">
        <Main />
      </div>
      <div id="Intro">
        <Intro />
      </div>

      <Skill />
    </>
  );
}

export default App;
