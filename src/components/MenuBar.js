import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuBarBlock = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
  top: 0;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 1;

  .MenuUlBlock {
    width: 100%;
    background: rgba(250, 250, 250, 0.8);
  }
  ul {
    display: none;
  }

  .MenuUl {
    max-width: 1400px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    list-style: none;
    background: rgba(250, 250, 250, 0.1);
  }

  .MenuUl .link {
    background: rgba(255, 255, 255, 0.5);
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
    &:hover {
      background: black;
    }
  }

  .MenuUl li a {
    text-decoration: none;
    padding: 20px 15px;
    font-weight: bold;
  }
  .toggleBtn {
    display: flex;
    justify-content: flex-end;
    font-size: 50px;
    background: rgba(0, 0, 0, 0.1);
  }
  .FiMenu {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
  }
`;

function MenuBar() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  const home = useRef();
  const intro = useRef();

  /*const onChangeScroll = (param) => {
    const location = param.current.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };*/
  return (
    <MenuBarBlock>
      <div className="MenuUlBlock">
        <div className="toggleBtn">
          <FiMenu className="FiMenu" onClick={onToggle} />
        </div>

        <ul className={toggle ? "MenuUl" : ""}>
          <li>
            <div className="link" ref={home}>
              <AnchorLink href="#Home">HOME</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link" ref={intro}>
              <AnchorLink href="#Intro">INTRO</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link">SKILLS</div>
          </li>
          <li>
            <div className="link">CONTACT</div>
          </li>
        </ul>
      </div>
    </MenuBarBlock>
  );
}

export default MenuBar;
