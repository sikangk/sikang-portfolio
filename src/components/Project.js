import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import img1 from "../image/slideimage/reactmovie.PNG";
import img2 from "../image/slideimage/todolist.PNG";
import img3 from "../image/slideimage/githubclone.PNG";
import img4 from "../image/slideimage/momentumclone.PNG";

const ProjectBlock = styled.div`
  max-width: 1400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .slideContainer {
    max-width: 60%;
    display: flex;
  }
`;
const ButtonBlock = styled.div`
  display: flex;
  margin: 10px auto;
  font-size: 50px;
  cursor: pointer;
`;
const TOTAL_SLIDES = 3;

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(3);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = " all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <ProjectBlock>
      <div className="slideContainer" ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
      </div>
      <ButtonBlock>
        <GrFormPreviousLink onClick={prevSlide} />
        <GrFormNextLink onClick={nextSlide} />
      </ButtonBlock>
    </ProjectBlock>
  );
}

export default Project;
