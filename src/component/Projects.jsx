import React, { useState } from 'react';
import styled from "styled-components";
import Colors from '../common/Color';
import Images from '../common/Images';
import { WeMapModal, BBModal } from './UI/Modal';
import { WeMapSwipe, BuzzerBeaterSwipe, PortfolioSwipe } from './UI/Swipe';

function Projects() {

  const [WeMapmodalOpen, setWeMapModalOpen] = useState(false);
  const [BBmodalOpen, setBBmodalOpen] = useState(false);

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
              <ProjectContent>
                {/* 프로젝트 git 주소 & 아키텍처 */}
                <ButtonList>
                  <Button onClick={() => window.open('https://github.com/gyural/WeMap-Frontend')}>
                    <Icon src={Images.github_button}/>
                  </Button>
                  <Button onClick={() => setWeMapModalOpen(!WeMapmodalOpen)}>
                    <Icon src={Images.plus}/>
                  </Button>
                </ButtonList>
                <ProjectWrapper>
                {WeMapmodalOpen === true ? <WeMapModal/> : 
                  (
                    <>
                      {/* 프로젝트 사진 */}
                      <Project>
                        <ProjectTitle>WeMap</ProjectTitle>
                        <WeMapSwipe />
                      </Project>
                      {/* 프로젝트 설명 */}
                      <ProjectInfo>
                        <InfoContainer>
                          <InfoTitle>기간</InfoTitle>
                          <Info>2023.09.04 - 2023.10.10</Info>
                          <InfoTitle>개발 동기</InfoTitle>
                          <Info>코로나 이후 증가한 재난 문자를 보기 쉬운 형태로 전달하기 위해서 시작했습니다.</Info>
                          <InfoTitle>핵심 기능</InfoTitle>
                          <Info>- 지도 위에 실시간 재난 문자 <text style={{color : Colors.button}}>아이콘</text>으로 시각화</Info>
                          <Info>
                            - 재난문자 <text style={{color : Colors.button}}>메뉴얼 </text> 
                            / <text style={{color : Colors.button}}>재난 문자</text> 내용 확인 / 
                            대피소 <text style={{color : Colors.button}}>길찾기</text>
                          </Info>
                          <Info>- 본인 위치 주변 <text style={{color : Colors.button}}>대피소 찾기</text> 기능</Info>
                        </InfoContainer>
                        <InfoContainer>
                          <InfoTitle>역할</InfoTitle>
                          <Info>프론트엔드 팀원</Info>
                          <Info>디자인 리드</Info>
                          <InfoTitle>사용 기술</InfoTitle>
                          <Info>Frontend : React</Info>
                          <Info>Backend : DRF, AWS Lambda</Info>
                          <Info>etc. : KakaoMap, Kakao mobility, 통계지리 API</Info>
                          <Info>세종시 대피소 데이터, 재난 관리 포털 크롤링</Info>
                          <InfoTitle>배포 주소</InfoTitle>
                      <Info style={{cursor : 'pointer',}} onClick={() => window.open('https://gyural.github.io/WeMap-Frontend/')}>https://gyural.github.io/WeMap-Frontend/</Info>
                        </InfoContainer>
                      </ProjectInfo>
                    </>
                  )
                }
                </ProjectWrapper>
              </ProjectContent>
            </ProjectContatiner>
            <ProjectContatiner>
              <ProjectContent>
                {/* 프로젝트 git 주소 & 아키텍처 */}
                <ButtonList>
                  <Button onClick={() => window.open('https://github.com/TEAM-REDCODE/buzzer-beater-frontend')}>
                    <Icon src={Images.github_button}/>
                  </Button>
                  <Button onClick={() => setBBmodalOpen(!BBmodalOpen)}>
                    <Icon src={Images.plus}/>
                  </Button>
                </ButtonList>
                <ProjectWrapper>
                {BBmodalOpen === true ? <BBModal/> :
                  <>
                    {/* 프로젝트 사진 */}
                    <Project>
                      <ProjectTitle>Buzzer Beater</ProjectTitle>
                      <BuzzerBeaterSwipe />
                    </Project>
                    {/* 프로젝트 설명 */}
                    <ProjectInfo>
                      <InfoContainer>
                        <InfoTitle>기간</InfoTitle>
                        <Info>2023.11.27 - 2024.02.02</Info>
                        <InfoTitle>개발 동기</InfoTitle>
                        <Info>학생들이 간편하게 농구 모임을 만들어서 농구를 함께 즐길 수 있도록 하기 위해 개발했습니다.</Info>
                        <InfoTitle>핵심 기능</InfoTitle>
                        <Info>- 간단하게 정보만 입력하면 쉽게 만들 수 있는 <text style={{color : Colors.button}}>농구 파티</text></Info>
                        <Info>- 농구 파티에 누구나 <text style={{color : Colors.button}}>쉽게</text> 참여 가능</Info>
                        <Info>- <text style={{color : Colors.button}}>용병 시스템</text>을 통한 참여 가능</Info>
                      </InfoContainer>
                      <InfoContainer>
                        <InfoTitle>역할</InfoTitle>
                        <Info>프론트엔드 팀원</Info>
                        <Info>디자인 리드</Info>
                        <InfoTitle>사용 기술</InfoTitle>
                        <Info>Frontend : React Native</Info>
                        <Info>Backend : Node.Js, express, MySQL</Info>
                        <Info>etc. : JWT 인증, expo</Info>
                      </InfoContainer>
                    </ProjectInfo>
                  </>
                }
                </ProjectWrapper>
              </ProjectContent>
            </ProjectContatiner>
            <ProjectContatiner>
              <ProjectContent>
                {/* 프로젝트 git 주소 & 아키텍처 */}
                <ButtonList>
                  <Button onClick={() => window.open('https://github.com/dbsrudrla/Portfolio')}>
                    <Icon src={Images.github_button}/>
                  </Button>
                </ButtonList>
                <PortfolioProjectWrapper>
                  {/* 프로젝트 사진 */}
                  <PortfolioProject>
                    <PortfolioProjectTitle>Portfolio</PortfolioProjectTitle>
                    <PortfolioSwipe />
                  </PortfolioProject>
                  {/* 프로젝트 설명 */}
                  <PortfolioProjectInfo>
                    <PortfolioInfoContainer>
                      <InfoTitle>기간</InfoTitle>
                      <Info>2024.01.28 - 2024.03.16</Info>
                      <InfoTitle>개발 동기</InfoTitle>
                      <Info>포트폴리오 용도로 사용하기 위해 제작한 웹사이트입니다.</Info>
                      <InfoTitle>핵심 기능</InfoTitle>
                      <Info>- <text style={{color : Colors.button}}>프로젝트 이미지</text> swipe</Info>
                      <Info>- <text style={{color : Colors.button}}>그룹 프로젝트</text> 정보들</Info>
                      <Info>- <text style={{color : Colors.button}}>반응형</text> 웹사이트</Info>
                    </PortfolioInfoContainer>
                    <PortfolioInfoContainer>
                      <InfoTitle>역할</InfoTitle>
                      <Info>디자인 및 프론트엔드 개발</Info>
                      <InfoTitle>사용 기술</InfoTitle>
                      <Info>Frontend : React</Info>
                      <Info>Backend : X</Info>
                      <InfoTitle>배포 주소</InfoTitle>
                      <Info style={{cursor : 'pointer',}} onClick={() => window.open('https://dbsrudrla.github.io/Portfolio/')}>https://dbsrudrla.github.io/Portfolio/</Info>
                    </PortfolioInfoContainer>
                  </PortfolioProjectInfo>
                </PortfolioProjectWrapper>
              </ProjectContent>
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
  @media screen and (max-width : 1000px) {
    width : 90%;
  }
`;
const TitleContainer = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
`;
const Title = styled.div`
  margin-bottom : 2%;
  text-align : center;
  font-size : 2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  @media screen and (max-width : 768px) {
    font-size : 1.5rem;
  }
`;
const Line = styled.div`
  width : 15%;
  margin : 0 auto;
  border-bottom : 2px solid ${Colors.black};
  @media screen and (max-width : 900px) {
    width : 20%;
  }
  @media screen and (max-width : 400px) {
    width : 35%;
  }
`;
const Section = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-around;
`;
const ProjectContatiner = styled.div`
  width : 95%;
  text-align : center;
  margin : 0 auto;
`;
const ProjectContent = styled.div`
  width : 100%;
  padding : 3% 8%;
  display : flex;
  flex-direction : column;
  box-sizing : border-box;
  margin-top : 5%;
  border-radius : 1.5rem;
  background-color : ${Colors.white};
  box-shadow: -10px 10px 8px 0 ${Colors.shadow};
`;
const ProjectWrapper = styled.div`
  display : flex;
  justify-content : space-around;
  @media screen and (max-width : 900px) {
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
  }
`;
const PortfolioProjectWrapper = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;
const ButtonList = styled.div`
  width : 105%;
  margin-bottom : 3%;
  display : flex;
  justify-content : flex-end;
`;
const Button = styled.a`
  width : 3.5%;
  padding : 1%;
  cursor: pointer;
  @media screen and (max-width : 900px) {
    width : 5%;
  }
  @media screen and (max-width : 500px) {
    width : 6%;
  }
`;
const Icon = styled.img`
  width : 100%;
`;
const Project = styled.div`
  width : 40%;
  display : flex;
  flex-direction : column;
  align-items : center;
  @media screen and (max-width : 900px) {
    width : 50%
  }
`;
const PortfolioProject = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
  align-items : center;
`;
const ProjectTitle = styled.div`
  margin-bottom : 10%;
  font-size : 2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  @media screen and (max-width : 768px) {
    font-size : 1.5rem;
  }
`;
const PortfolioProjectTitle = styled.div`
  margin-bottom : 3%;
  font-size : 2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  @media screen and (max-width : 768px) {
    font-size : 1.5rem;
  }
`;
const ProjectInfo = styled.div`
  width : 45%;
  text-align : start;
  @media screen and (max-width : 900px) {
    width : 100%;
    display : flex;
    justify-content : space-around;
    margin : 5% auto;
  }
  @media screen and (max-width : 500px) {
    flex-direction : column;
  }
`;
const PortfolioProjectInfo = styled.div`
  width : 100%;
  text-align : start;
  display : flex;
  justify-content : space-around;
  margin : 5% auto;
  @media screen and (max-width : 500px) {
    flex-direction : column;
    margin-top : 8%;
  }
`;
const InfoContainer = styled.div`
  width : 100%;
  @media screen and (max-width : 900px) {
    width : 45%;
    flex-direction : column;
  }
  @media screen and (max-width : 500px) {
    width : 100%;
  }
`;
const PortfolioInfoContainer = styled.div`
  width : 45%;
  @media screen and (max-width : 900px) {
    flex-direction : column;
  }
  @media screen and (max-width : 500px) {
    width : 100%;
  }
`;
const InfoTitle = styled.div`
  margin-bottom : 5%;
  font-size : 1.2rem;
  font-weight : 700;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 0.95rem;
  }
`;
const Info = styled.div`
  margin-bottom : 5%;
  font-size : 1.1rem;
  font-weight : 200;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 0.9rem;
  }
`;

export default Projects;
