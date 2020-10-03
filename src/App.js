import React from "react";
import { createGlobalStyle } from "styled-components";

import MenuBar from "./components/MenuBar";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";

const GlobalStyle = createGlobalStyle`
html,body{
  width:100%;
  height:100%;
}
body{
  box-sizing:border-box;
  font-family: 'Roboto';
   
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="first">
        <div className="bg-wrap">
          <div className="bg">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
