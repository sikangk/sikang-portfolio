import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FiMenu, FiXCircle } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";
const fadeIn = keyframes`
from{opacity:0;
}
to{opacity:1;
}
`;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    background: rgba(250, 250, 250, 0.1);
    position: absolute;
    right: 0;
    margin-right: 20px;
    animation-duration: 3s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
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
    .toggleIcon {
      width: 50px;
      height: 50px;
      margin-right: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.125s all ease-in;
    }
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

  return (
    <MenuBarBlock>
      <div className="MenuUlBlock">
        <div className="toggleBtn">
          <div className="toggleIcon" onClick={onToggle}>
            {toggle ? <FiXCircle /> : <FiMenu className="FiMenu" />}
          </div>
        </div>

        <ul className={toggle ? "MenuUl" : ""}>
          <li>
            <div className="link">
              <AnchorLink href="#Home">HOME</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link">
              <AnchorLink href="#Intro">INTRO</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link">
              <AnchorLink href="#Project">PROJECT</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link">
              <AnchorLink href="#Contact">CONTACT</AnchorLink>
            </div>
          </li>
        </ul>
      </div>
    </MenuBarBlock>
  );
}

export default MenuBar;
