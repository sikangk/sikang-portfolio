import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuBarBlock = styled.div`
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
  .MenuUl {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
  }

  .MenuUl .link {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .MenuUl li a {
    width: 100%;
    text-decoration: none;
    font-weight: bold;
    color: black;
    padding: 10px 10px;
    &:hover {
      background: rgb(0, 0, 0, 0.5);
    }
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
    const contactRectTop = contactRect.top + scrollTop - 400;

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
            <div
              className="link"
              style={{
                background: active === 1 ? "rgb(0, 0, 0, 0.5)" : "",
              }}
            >
              <AnchorLink
                href="#Home"
                style={{ color: active === 1 ? "white" : "" }}
              >
                HOME
              </AnchorLink>
            </div>
          </li>
          <li>
            <div
              className="link"
              style={{ background: active === 2 ? "rgb(0, 0, 0, 0.5)" : "" }}
            >
              <AnchorLink
                href="#Intro"
                style={{ color: active === 2 ? "white" : "" }}
              >
                INTRO
              </AnchorLink>
            </div>
          </li>
          <li>
            <div
              className="link"
              style={{ background: active === 3 ? "rgb(0, 0, 0, 0.5)" : "" }}
            >
              <AnchorLink
                href="#Project"
                style={{ color: active === 3 ? "white" : "" }}
              >
                PROJECT
              </AnchorLink>
            </div>
          </li>
          <li>
            <div
              className="link"
              style={{ background: active === 4 ? "rgb(0, 0, 0, 0.5)" : "" }}
            >
              <AnchorLink
                href="#Contact"
                style={{ color: active === 4 ? "white" : "" }}
              >
                CONTACT
              </AnchorLink>
            </div>
          </li>
        </ul>
      </div>
    </MenuBarBlock>
  );
}

export default MenuBar;
