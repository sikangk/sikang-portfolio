import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../customhooks/ScrollFadeIn";

import img from "../image/dreamer.jpg";
import html from "../image/html.png";
import css from "../image/css.png";
import sass from "../image/sass.png";
import javascript from "../image/javascript.png";
import react from "../image/react.png";
import node from "../image/node.png";
import jsp from "../image/jsp.png";
import php from "../image/php.png";
import python from "../image/python.png";
import oracle from "../image/oracle.png";
import mysql from "../image/mysql.png";
import mongodb from "../image/mongodb.png";
import linux from "../image/linux.png";

import sky from "../image/sky.jpg";

const IntroBlock = styled.div`
  margin-top: 400px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const AboutBlock = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url(${img});
  background-size: cover;
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px auto;
  background: rgb(255, 255, 255, 0.7);
  border-radius: 10px;
  h3 {
    font-size: 48px;
    font-weight: bold;
    border-bottom: 1px solid black;
    text-shadow: 3px 3px 3px rgb(0, 0, 0);
  }
  p {
    font-size: 18px;
    font-weight: bold;
    line-height: 10px;

    @media (max-width: 1024px) {
      line-height: 30px;
    }
    @media (max-width: 768px) {
      line-height: 20px;
    }
  }
`;
const SkillBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  .skill-header {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;

    h3 {
      font-size: 48px;
      font-weight: bold;
      border-bottom: 1px solid black;
      text-shadow: 3px 3px 3px rgb(0, 0, 0);
    }
  }
  .skill-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    background: rgb(255, 255, 255, 0.7);
    border-radius: 10px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .frontEnd {
      width: 33%;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      @media (max-width: 1024px) {
        width: 100%;
      }
      .html-css {
        display: flex;
        justify-content: center;
        align-items: center;
        .html {
          width: 50px;
          height: 50px;
          background: url(${html});
          background-size: cover;
        }
        .css {
          width: 50px;
          height: 50px;
          margin-top: 10px;
          background: url(${css});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
      .sass {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .sass-icon {
          width: 60px;
          height: 50px;
          background: url(${sass});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
      .javascript {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .javascript-icon {
          width: 50px;
          height: 50px;
          background: url(${javascript});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
      .react {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .react-icon {
          width: 50px;
          height: 50px;
          background: url(${react});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
    }
    .backEnd {
      width: 33%;
      display: flex;
      flex-direction: column;
      @media (max-width: 1024px) {
        width: 100%;
      }

      .node {
        display: flex;
        justify-content: center;
        align-items: center;

        .node-icon {
          width: 80px;
          height: 80px;
          background: url(${node});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }

      .jsp {
        display: flex;
        justify-content: center;
        align-items: center;

        .jsp-icon {
          width: 50px;
          height: 50px;
          background: url(${jsp});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }

      .php {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .php-icon {
          width: 50px;
          height: 50px;
          background: url(${php});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
      .python {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .python-icon {
          width: 50px;
          height: 50px;
          background: url(${python});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
    }
    .db {
      width: 33%;
      display: flex;
      flex-direction: column;
      @media (max-width: 1024px) {
        width: 100%;
      }
      .oracle {
        display: flex;
        justify-content: center;
        align-items: center;

        .oracle-icon {
          width: 80px;
          height: 80px;
          background: url(${oracle});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }

      .mysql {
        display: flex;
        justify-content: center;
        align-items: center;

        .mysql-icon {
          width: 50px;
          height: 50px;
          background: url(${mysql});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
      .mongodb {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .mongodb-icon {
          width: 50px;
          height: 50px;
          background: url(${mongodb});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
      .linux {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .linux-icon {
          width: 50px;
          height: 50px;
          background: url(${linux});
          background-size: cover;
        }
        span {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin-left: 10px;
        }
      }
    }
  }
`;

function Intro() {
  const animatedCircle = useScrollFadeIn();
  const animatedContent = useScrollFadeIn();
  const animatedSkillHeader = useScrollFadeIn();
  const animatedSkillBody = useScrollFadeIn();
  return (
    <IntroBlock>
      <AboutBlock>
        <ProfileCircle {...animatedCircle} />
        <ProfileContent {...animatedContent}>
          <h3>ABOUT ME</h3>
          <p>방문해주셔서 감사합니다.</p>
          <p>저는 곽시강이라고 합니다.</p>
          <p>책임감을 중요시 합니다.</p>
          <p>항상 도전정신과 끈기를 가지고 절대 포기하지않는</p>
          <p>신입 프론트엔드 개발자를 꿈꾸고 있습니다.</p>
        </ProfileContent>
      </AboutBlock>
      <SkillBlock>
        <div className="skill-header" {...animatedSkillHeader}>
          <h3>SKILLS</h3>
        </div>
        <div className="skill-body" {...animatedSkillBody}>
          <div className="frontEnd">
            <div className="html-css">
              <div className="html"></div>
              <div className="css"></div>
              <span>HTML/CSS</span>
            </div>
            <div className="sass">
              <div className="sass-icon"></div>
              <span>SASS/SCSS</span>
            </div>
            <div className="javascript">
              <div className="javascript-icon"></div>
              <span>JAVASCRIPT</span>
            </div>
            <div className="react">
              <div className="react-icon"></div>
              <span>REACT</span>
            </div>
          </div>
          <div className="backEnd">
            <div className="node">
              <div className="node-icon"></div>
              <span>NODEJS</span>
            </div>

            <div className="jsp">
              <div className="jsp-icon"></div>
              <span>JSP</span>
            </div>

            <div className="php">
              <div className="php-icon"></div>
              <span>PHP</span>
            </div>

            <div className="python">
              <div className="python-icon"></div>
              <span>PYTHON</span>
            </div>
          </div>
          <div className="db">
            <div className="oracle">
              <div className="oracle-icon"></div>
              <span>ORACLE</span>
            </div>

            <div className="mysql">
              <div className="mysql-icon"></div>
              <span>MYSQL</span>
            </div>

            <div className="mongodb">
              <div className="mongodb-icon"></div>
              <span>MONGO DB</span>
            </div>

            <div className="linux">
              <div className="linux-icon"></div>
              <span>LINUX</span>
            </div>
          </div>
        </div>
      </SkillBlock>
    </IntroBlock>
  );
}

export default Intro;
