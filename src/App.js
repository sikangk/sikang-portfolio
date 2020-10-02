import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import MenuBar from "./components/MenuBar";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";

import sky from "./image/sky.jpg";

const GlobalStyle = createGlobalStyle`
html,body{
  width:100%;
  height:100%;
}
body{
  background-position:center center !important;
  background-repeat: no-repeat !important;
  box-sizing:border-box;
  font-family: 'Roboto';
  background: url(${sky});
  background-attachment: fixed !important;
  background-size:cover !important;
 
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
