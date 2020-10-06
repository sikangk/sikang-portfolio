import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

import { useScrollFadeIn } from "../customhooks/ScrollFadeIn";

const ContactBlock = styled.div`
  margin-top: 800px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 48px;
    font-weight: bold;
    border-bottom: 1px solid black;
    text-shadow: 3px 3px 3px rgb(0, 0, 0);
  }
  span {
    margin-top: 150px;
    font-size: 36px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  .contactImage {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    a {
      font-size: 80px;
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  margin-top: 150px;
  border-top: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Contact() {
  const animatedContactTitle = useScrollFadeIn();
  const animatedEmail = useScrollFadeIn();
  const animatedSns = useScrollFadeIn();
  return (
    <ContactBlock>
      <h3 {...animatedContactTitle}>CONTACT ME</h3>
      <span {...animatedEmail}>
        <FiMail />
        updream4@naver.com
      </span>
      <div className="contactImage" {...animatedSns}>
        <a
          href="https://github.com/sikangk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.instagram.com/sikangk/?hl=ko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100003571946430"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook />
        </a>
      </div>
      <Footer>
        <p>Copyright © 2020 곽시강 all right reserved</p>
        <p>본사이트는 React로 제작되었습니다.</p>
      </Footer>
    </ContactBlock>
  );
}

export default Contact;
