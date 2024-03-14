import React from 'react';
import styled from "styled-components";
import Colors from '../common/Color';

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
                </Project>
                {/* 프로젝트 설명 */}
                <ProjectInfo>
                  <InfoTitle>기간</InfoTitle>
                  <Info>2023.09.04 - 2023.10.10</Info>
                  <InfoTitle>개발 동기</InfoTitle>
                  <Info>코로나 이후 증가한 재난 문자를 보기 쉬운 형태로</Info>
                  <Info>전달하기 위해서 시작했습니다.</Info>
                  <InfoTitle>핵심 기능</InfoTitle>
                  <Info>지도 위에 실시간 재난 문자 <text style={{color : Colors.button}}>아이콘</text>으로 시각화</Info>
                  <Info>
                    재난문자 <text style={{color : Colors.button}}>메뉴얼 </text> 
                    / <text style={{color : Colors.button}}>재난 문자</text> 내용 확인 / 
                    대피소 <text style={{color : Colors.button}}>길찾기</text>
                  </Info>
                  <Info>본인 위치 주변 <text style={{color : Colors.button}}>대피소 찾기</text> 기능</Info>
                  <InfoTitle>역할</InfoTitle>
                  <Info>프론트엔드 팀원</Info>
                  <Info>디자인 리드</Info>
                  <InfoTitle>사용 기술</InfoTitle>
                  <Info>Frontend : React</Info>
                  <Info>Backend : DRF, AWS Lambda</Info>
                  <Info>etc. : KakaoMap, Kakao mobility, 통계지리 API</Info>
                  <Info>세종시 대피소 데이터, 재난 관리 포털 크롤링</Info>
                </ProjectInfo>
              </ProjectWrapper>
            </ProjectContatiner>
            <ProjectContatiner>
              <ProjectWrapper>
                {/* 프로젝트 사진 */}
                <Project>
                  <ProjectTitle>Buzzer Beater</ProjectTitle>
                </Project>
                {/* 프로젝트 설명 */}
                <ProjectInfo>
                  <InfoTitle>기간</InfoTitle>
                  <Info>2023.11.27 - 2024.02.02</Info>
                  <InfoTitle>개발 동기</InfoTitle>
                  <Info>학생들이 간편하게 농구 모임을 만들어서</Info>
                  <Info>농구를 함께 즐길 수 있도록 하기 위해 개발했습니다.</Info>
                  <InfoTitle>핵심 기능</InfoTitle>
                  <Info>간단하게 정보만 입력하면 쉽게 만들 수 있는 <text style={{color : Colors.button}}>농구 파티</text></Info>
                  <Info>농구 파티에 누구나 <text style={{color : Colors.button}}>쉽게</text> 참여 가능</Info>
                  <Info><text style={{color : Colors.button}}>용병 시스템</text>을 통한 참여 가능</Info>
                  <InfoTitle>역할</InfoTitle>
                  <Info>프론트엔드 팀원</Info>
                  <Info>디자인 리드</Info>
                  <InfoTitle>사용 기술</InfoTitle>
                  <Info>Frontend : React Native</Info>
                  <Info>Backend : Node.Js, express, MySQL</Info>
                  <Info>etc. : JWT 인증, expo</Info>
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
  margin : 0 auto;
`;
const ProjectWrapper = styled.div`
  width : 100%;
  padding : 8%;
  display : flex;
  justify-content : space-around;
  box-sizing : border-box;
  margin-top : 5%;
  border-radius : 1.5rem;
  background-color : ${Colors.white};
  box-shadow: -10px 10px 8px 0 ${Colors.shadow};
`;
const Project = styled.div`
  width : 30%;
  display : flex;
  flex-direction : column;
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
const ProjectInfo = styled.div`
  width : 45%;
  text-align : start;
`;
const InfoTitle = styled.div`
  margin-bottom : 5%;
  font-size : 1.2rem;
  font-weight : 700;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 1rem;
  }
`;
const Info = styled.div`
  margin-bottom : 5%;
  font-size : 1.1rem;
  font-weight : 200;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 0.95rem;
  }
`;

export default Projects;
