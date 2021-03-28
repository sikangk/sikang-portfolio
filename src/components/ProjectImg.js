import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
const Img = styled.img`
  width: 100%;
  height: 50vh;
  cursor: pointer;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 2px 3px 0px;
  &:hover {
    box-shadow: 0 20px 20px 0px rgba(0, 0, 0, 0.9);
    transition: 0.5s;
  }
  &:active {
    box-shadow: 0 20px 20px 0px rgba(0, 0, 0, 0.9);
    transition: 0.5s;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 30vh;
  }
`;

function ProjectImg({
  title,
  content,
  whatidid,
  skill,
  img,
  site,
  github,
  youtube1,
  youtube2,
}) {
  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(true);
  };
  const onRemoveModal = () => {
    setModal(false);
  };

  return (
    <>
      <Img src={img} onClick={onModal} />
      {modal && (
        <Modal
          title={title}
          content={content}
          whatidid={whatidid}
          skill={skill}
          site={site}
          github={github}
          youtube1={youtube1}
          youtube2={youtube2}
          onRemoveModal={onRemoveModal}
        />
      )}
    </>
  );
}

export default ProjectImg;
