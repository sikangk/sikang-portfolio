import React, { useRef } from "react";
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
  background:#f3f0ff;
   
}
`;

function App() {
  const home = useRef(null);
  const intro = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  return (
    <>
      <GlobalStyle />
      <MenuBar home={home} intro={intro} project={project} contact={contact} />
      <div id="Home" ref={home}>
        <Main />
      </div>
      <div id="Intro" ref={intro}>
        <Intro />
      </div>
      <div id="Project" ref={project}>
        <Project />
      </div>
      <div id="Contact" ref={contact}>
        <Contact />
      </div>
    </>
  );
}

export default App;
