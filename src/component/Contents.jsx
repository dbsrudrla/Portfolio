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
      <ContentsWrapper id="projects" bgColor='#CBE5B6'><Projects /></ContentsWrapper>
      <ContentsWrapper id="career"><Career /></ContentsWrapper>
      <Footer />
    </Container>
  )
};

const Container = styled.div`
  width: 100vw;
  margin-bottom : 0;
  display: flex;
  flex-direction: column;
  margin-top : 10%;
  overflow-x : hidden;
`;
const ContentsWrapper = styled.div`
  width : 100vw;
  height: 90vh;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#FFFFFF')};
`;

export default Contents;
