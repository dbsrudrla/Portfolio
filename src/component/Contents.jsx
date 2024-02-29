import React from "react";
import styled from "styled-components";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Career from "./Career";


function Contents() {
  return (
    <Container>
      <ContentsWrapper id="home" bgColor='#FFDADA'><Home /></ContentsWrapper>
      <ContentsWrapper id="aboutMe"><AboutMe /></ContentsWrapper>
      <ContentsWrapper id="skills" bgColor='#FFE6A6'><Skills /></ContentsWrapper>
      <ContentsWrapper id="projects" bgColor='#CBE5B6'><Projects /></ContentsWrapper>
      <ContentsWrapper id="career"><Career /></ContentsWrapper>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top : 4.5%;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#FFFFFF')};
`;

export default Contents;
