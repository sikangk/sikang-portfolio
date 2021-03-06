import React from "react";
import styled from "styled-components";
import ProjectImg from "./ProjectImg";
import { useScrollFadeIn } from "../customhooks/ScrollFadeIn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../image/slideimage/reactmovie.PNG";
import img2 from "../image/slideimage/todolist.PNG";
import img3 from "../image/slideimage/githubclone.PNG";
import img4 from "../image/slideimage/momentumclone.PNG";
import img5 from "../image/slideimage/sellerbee.PNG";

const ProjectBlock = styled.div`
  //max-width: 1400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 48px;
    font-weight: bold;
    border-bottom: 1px solid black;
    text-shadow: 3px 3px 3px rgb(0, 0, 0);
  }
  .slick-dots {
    button:before {
    }
  }
  .slick-slide.slick-center {
    margin: 0px auto;
    transform: scale(1);
    transition: 0.8s;
  }
  .slick-slide {
    transform: scale(0.8);
    transition: 0.8s;
  }
  .slick-list {
    height: 70vh;
    z-index: 200;
  }
`;

const ProjectImgBlock = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const ImgContainer = styled.div`
  width: 800px;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    width: 400px;
  }
`;

const settings = {
  className: "center",
  autoplay: false,
  autoplaySpeed: 5000,
  dots: true,
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  centerPadding: "0px",
  speed: 1500,
  variableWidth: true,
  draggable: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: "unslick",
    },
  ],
};

const PROJECT_ARRAY = [
  {
    id: 1,
    title: "Seller bee",
    content:
      "스마트스토어에서 사업을 시작하거나 어떠한 상품을 기획하고 싶은 셀러 분들께 유용한 Market Intelligence Platform 입니다. 어떠한 키워드를 검색하여 해당 키워드의 시장을 데이터로 쉽게 확인 할 수 있습니다.",
    whatidid: "카테고리 분석 , 키워드 분석 프론트 엔드를 담당 했습니다.",
    skill: "React , React-redux , axios",
    img: img5,
    site: "http://www.sellerbee.co.kr",
    github: "",
    youtube1: "https://www.youtube.com/embed/NhqsvsvAcUI",
    youtube2: "https://www.youtube.com/embed/rj5XC7hWgHc",
  },
  {
    id: 2,
    title: "React Movie App",
    content:
      "리액트로 영화 api를 이용한 영화앱을 만들어보며, 리액트 환경에서 api 사용하는법을 공부했습니다.",
    whatidid: "",
    skill: "React , axios",
    img: img1,
    site: "https://sikangk.github.io/react-movieapp",
    github: "https://github.com/sikangk/react-movieapp",
    youtube1: "",
    youtube2: "",
  },
  {
    id: 3,
    title: "TodoList",
    content:
      "리액트로 useReducer,context api를 사용해 투두리스트를 만들었습니다.",
    whatidid: "",
    skill: "React , useReducer,context api",
    img: img2,
    site: "https://sikangk.github.io/todolistsk/",
    github: "https://github.com/sikangk/todolistsk",
    youtube1: "",
    youtube2: "",
  },
  {
    id: 4,
    title: "GitHub Clone",
    content:
      "예전 깃허브 사이트를 클론코딩하며 html/css과 반응형웹을 공부하였습니다.",
    whatidid: "",
    skill: "html/css",
    img: img3,
    site: "https://sikangk.github.io/GitHub-Clone/",
    github: "https://github.com/sikangk/GitHub-Clone",
    youtube1: "",
    youtube2: "",
  },
  {
    id: 5,
    title: "Momentum-Clone",
    content:
      "크롬 앱 Momentum을 클론 코딩하며 자바스크립트 기초를 다졌고, 날씨 api와 웹의 LocalStorage로 정보를 저장하는법을 공부 하였습니다.",
    whatidid: "",
    skill: "Vanilla Js",
    img: img4,
    site: "https://sikangk.github.io/momentum-clone/",
    github: "https://github.com/sikangk/momentum-clone",
    youtube1: "",
    youtube2: "",
  },
];

function Project() {
  const animatedProjectTitle = useScrollFadeIn();
  return (
    <ProjectBlock>
      <h3 {...animatedProjectTitle}>PROJECT</h3>
      <div style={{ margin: "0px auto" }}>
        {
          <Slider {...settings} style={{ width: "1113px" }}>
            {PROJECT_ARRAY.map((image) => (
              <div>
                <ImgContainer key={image.id}>
                  <ProjectImg
                    key={image.id}
                    title={image.title}
                    content={image.content}
                    whatidid={image.whatidid}
                    skill={image.skill}
                    img={image.img}
                    site={image.site}
                    github={image.github}
                    youtube1={image.youtube1}
                    youtube2={image.youtube2}
                  />
                </ImgContainer>
              </div>
            ))}
          </Slider>
        }
      </div>
    </ProjectBlock>
  );
}

export default Project;
