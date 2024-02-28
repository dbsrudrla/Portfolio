import React from "react";
import styled from "styled-components";
import Colors from "../common/Color";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Career from "./Career";


const Contents = () => (
  <Container>
    <ContentsWrapper id="home" bgColor='${Colors.Home}'><Home /></ContentsWrapper>
    <ContentsWrapper id="aboutMe" bgColor='${Colors.white}'><AboutMe /></ContentsWrapper>
    <ContentsWrapper id="skills" bgColor='${Colors.yellow}'><Skills /></ContentsWrapper>
    <ContentsWrapper id="projects" bgColor='${Colors.green}'><Projects /></ContentsWrapper>
    <ContentsWrapper id="career" bgColor='${Colors.white}'><Career /></ContentsWrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '${Colors.Home}')};
`;

export default Contents;
