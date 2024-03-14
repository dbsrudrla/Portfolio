import React, {useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Activities from "./Activities";
import Footer from "./Footer";


function Contents() {
  // 반응형 웹 헤더
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <Container>
      <Header isToggleOpen={isToggleOpen} setIsToggleOpen={setIsToggleOpen}/>
      <ContentsWrapper id="home" bgColor='#FFF3DA'><Home /></ContentsWrapper>
      <ContentsWrapper id="aboutMe"><AboutMe /></ContentsWrapper>
      <ContentsWrapper id="skills" bgColor='#FFEECC'><Skills /></ContentsWrapper>
      <ContentsWrapper id="projects" bgColor='#FFEADD'><Projects /></ContentsWrapper>
      <ContentsWrapper id="activity"><Activities /></ContentsWrapper>
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
