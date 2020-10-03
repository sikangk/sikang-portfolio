import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuBarBlock = styled.div`
  position: fixed;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;

  ul {
    display: none;
  }

  .MenuUl {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
  }

  .MenuUl .link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    &:hover {
      background: rgb(0, 0, 0, 0.3);
    }
    .circle {
      width: 10px;
      height: 10px;
      border: 1px solid black;
      border-radius: 50%;
      margin-right: 5px;
    }
  }

  .MenuUl li a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }

  @media (max-width: 1024px) {
  }
`;

function MenuBar({ home, intro, project, contact }) {
  const [active, setActive] = useState(0);
  const scrollTop = window.pageYOffset;
  const onScroll = () => {
    const homeRect = home.current.getBoundingClientRect();
    const homeRectTop = homeRect.top + scrollTop - 50;

    const introRect = intro.current.getBoundingClientRect();
    const introRectTop = introRect.top + scrollTop - 50;

    const projectRect = project.current.getBoundingClientRect();
    const projectRectTop = projectRect.top + scrollTop - 50;

    const contactRect = contact.current.getBoundingClientRect();
    const contactRectTop = contactRect.top + scrollTop - 50;

    if (scrollTop < homeRectTop) {
      setActive(0);
    }
    if (homeRectTop <= scrollTop && scrollTop < introRectTop) {
      setActive(1);
    }
    if (introRectTop <= scrollTop && scrollTop < projectRectTop) {
      setActive(2);
    }
    if (projectRectTop <= scrollTop && scrollTop < contactRectTop) {
      setActive(3);
    }
    if (contactRectTop <= scrollTop) {
      setActive(4);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.addEventListener("scroll", onScroll);
    };
  });

  return (
    <MenuBarBlock>
      <div className="MenuUlBlock">
        <ul className="MenuUl">
          <li>
            <div className="link">
              <div
                className="circle"
                style={{ background: active === 1 ? "black" : "" }}
              ></div>
              <AnchorLink href="#Home">HOME</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link">
              <div
                className="circle"
                style={{ background: active === 2 ? "black" : "" }}
              ></div>
              <AnchorLink href="#Intro">INTRO</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link">
              <div
                className="circle"
                style={{ background: active === 3 ? "black" : "" }}
              ></div>
              <AnchorLink href="#Project">PROJECT</AnchorLink>
            </div>
          </li>
          <li>
            <div className="link">
              <div
                className="circle"
                style={{ background: active === 4 ? "black" : "" }}
              ></div>
              <AnchorLink href="#Contact">CONTACT</AnchorLink>
            </div>
          </li>
        </ul>
      </div>
    </MenuBarBlock>
  );
}

export default MenuBar;
