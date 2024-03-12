import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Career from "./Career";
import Footer from "./Footer";


function Contents() {
  return (
    <Container>
      <Header />
      <ContentsWrapper id="home" bgColor='#FFDADA'><Home /></ContentsWrapper>
      <ContentsWrapper id="aboutMe"><AboutMe /></ContentsWrapper>
      <ContentsWrapper id="skills" bgColor='#FFE6A6'><Skills /></ContentsWrapper>
      <ContentsWrapper id="projects" bgColor='#F8F6F6'><Projects /></ContentsWrapper>
      <ContentsWrapper id="career" bgColor='#FFE6A6'><Career /></ContentsWrapper>
      <Footer />
    </Container>
  )
};

const Container = styled.div`
  display: block;
`;
const ContentsWrapper = styled.div`
  width : 100%;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#FFFFFF')};
`;

export default Contents;
