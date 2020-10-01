import React from "react";
import { createGlobalStyle } from "styled-components";

import MenuBar from "./components/MenuBar";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";

import sky from "./image/sky.jpg";

const GlobalStyle = createGlobalStyle`

body{
  
  box-sizing:border-box;
  font-family: 'Roboto';
  background: url(${sky});
  background-attachment: fixed;
  background-size:cover;
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
