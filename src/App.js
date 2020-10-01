import React from "react";
import { createGlobalStyle } from "styled-components";

import MenuBar from "./components/MenuBar";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";

const GlobalStyle = createGlobalStyle`

body{
  background:white;
  box-sizing:border-box;
  font-family: 'Roboto';
  
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
      <div id="Project">
        <Project />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
