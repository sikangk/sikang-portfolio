import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
const Img = styled.img`
  width: 100%;
  height: 70vh;
  cursor: pointer;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 2px 3px 0px;
  &:hover {
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
    transition: 1s;
  }
  &:active {
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
    transition: 1s;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

function ProjectImg({ title, content, img, site, github }) {
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
          site={site}
          github={github}
          onRemoveModal={onRemoveModal}
        />
      )}
    </>
  );
}

export default ProjectImg;
