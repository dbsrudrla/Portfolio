import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';
import { WeMapSwipe, BuzzerBeaterSwipe } from '../common/Swipe';

function Projects() {
  return (
    <>
      <Container>
        <Wrapper>
          {/* 제목 */}
          <TitleContainer>
            <Title>Projects</Title>
            <Line/>
          </TitleContainer>
          {/* 내용 */}
          <Section>
            <ProjectContatiner>
              <ProjectWrapper>
                {/* 프로젝트 사진 */}
                <Project>
                  <ProjectTitle>WeMap</ProjectTitle>
                  <ProjectImage>
                    <WeMapSwipe />
                  </ProjectImage>
                </Project>
                {/* 프로젝트 설명 */}
                <ProjectInfo>
                  <Info></Info>
                </ProjectInfo>
              </ProjectWrapper>
            </ProjectContatiner>
            <ProjectContatiner>
              <ProjectWrapper>
                {/* 프로젝트 사진 */}
                <Project>
                  <ProjectTitle>Buzzer Beater</ProjectTitle>
                  <ProjectImage>
                    <BuzzerBeaterSwipe />
                  </ProjectImage>
                </Project>
                {/* 프로젝트 설명 */}
                <ProjectInfo>
                  <Info></Info>
                </ProjectInfo>
              </ProjectWrapper>
            </ProjectContatiner>
          </Section>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width : 100%;
  box-sizing : border-box;
  padding : 5% 0;
`;
const Wrapper = styled.div`
  width : 80%;
  margin : 0 auto;
`;
const TitleContainer = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
`;
const Title = styled.div`
  margin-bottom : 3%;
  text-align : center;
  font-size : 2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
`;
const Line = styled.div`
  width : 20%;
  margin : 0 auto;
  border-bottom : 2px solid ${Colors.black};
`;
const Section = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-around;
`;
const ProjectContatiner = styled.div`
  width : 95%;
  text-align : center;
`;
const ProjectWrapper = styled.div`
  width : 100%;
  padding : 8%;
  display : flex;
  justify-content : space-around;
  box-sizing : border-box;
  margin-top : 5%;
  border-radius : 1rem;
  background-color : ${Colors.white};
  border : 1px solid black;
`;
const Project = styled.div`
  width : 33%;
  display : flex;
  flex-direction : column;
  border : 1px solid black;
`;
const ProjectTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.8rem;
  font-weight : 700;
  font-family : 'BalooChettan';
`;
const ProjectImage = styled.div`
  width : 33%;

`;
const ProjectInfo = styled.div`
  width : 44%;
  border : 1px solid black;
`;
const Info = styled.div`
  margin-top : 2%;
  font-size : 1.2rem;
  font-family : 'NotoSans';
`;

export default Projects;
