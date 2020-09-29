import React from "react";
import styled from "styled-components";

const ContactBlock = styled.div`
  margin-top: 400px;
  max-width: 1400px;
  height: 800px;
  background: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Contact() {
  return <ContactBlock>컨택트 사이트 입니다.</ContactBlock>;
}

export default Contact;
