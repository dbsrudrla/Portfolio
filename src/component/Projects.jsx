import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import styled from "styled-components";
import Images from '../common/\bImages';
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
                  <>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={Pagination}
                      style={{
                        width : '40%',
                      }}
                    >
                      <SwiperWrapper>
                        <SwiperSlide><Image src={Images.WeMapStart} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapLogin} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapSignup} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapHome} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapSidebar} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapMypage} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapAlarm} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapNotice} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapClickIcon} /></SwiperSlide>
                        <SwiperSlide><Image src={Images.WeMapFindload} /></SwiperSlide>
                      </SwiperWrapper>
                    </Swiper>
                  </> 
                </Project>
                {/* 프로젝트 설명 */}
                <ProjectInfo>
                  <InfoTitle>기간</InfoTitle>
                  <Info>2023.09.04 - 2023.10.10</Info>
                  <InfoTitle>개발 동기</InfoTitle>
                  <Info>코로나 이후 약 130배 증가한 재난 문자를 보기 쉬운 형태로</Info>
                  <Info>전달하기 위해서 시작했습니다.</Info>
                  <InfoTitle>핵심 기능</InfoTitle>
                  <Info>지도 위에 실시간 재난 문자 아이콘으로 시각화</Info>
                  <Info>재난문자 메뉴얼 / 문자 내용 확인 / 대피소 길찾기 기능</Info>
                  <Info>본인 위치 주변 대피소 찾기 기능</Info>
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
                  <Info>교내 학생들이 쉽게 농구 모임을 만들어서</Info>
                  <Info>농구를 즐길 수 있도록 하기 위해 개발했습니다.</Info>
                  <InfoTitle>핵심 기능</InfoTitle>
                  <Info>간단하게 정보만 적으면 쉽게 만들 수 있는 농구 파티</Info>
                  <Info>농구 파티에 누구나 쉽게 참여 가능</Info>
                  <Info>용병 시스템을 통한 참여 가능</Info>
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
  border-radius : 1rem;
  background-color : ${Colors.block};
  box-shadow: -10px 10px 8px 0 ${Colors.Shadow};
`;
const Project = styled.div`
  width : 30%;
  display : flex;
  flex-direction : column;
  border : 1px solid black;
`;
const ProjectTitle = styled.div`
  margin-bottom : 10%;
  font-size : 1.8rem;
  font-weight : 700;
  font-family : 'BalooChettan';
`;
const SwiperWrapper = styled.div`
  cursor : grab;
  transform : translateZ(0);
  box-sizing : initial;
  display : flex;
  width : 100%;
  height : 100%;
  position : relative;
  z-index : 1;
`;
const Image = styled.img`
  width : 100%;
  border-radius : 1rem;
  object-fit : contain;
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
`;
const Info = styled.div`
  margin-bottom : 5%;
  font-size : 1.1rem;
  font-weight : 300;
  font-family : 'NotoSans';
`;

export default Projects;
