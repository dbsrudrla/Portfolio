import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';

function AboutMe() {
  return (
    <>
      <Container>
        <Wrapper>
          {/* 제목 */}
          <TitleContainer>
            <Title>About me</Title>
            <Line/>
          </TitleContainer>
          {/* 내용 */}
          <TextList>
            <InfoList>
              <InfoContainer><InfoTitle>Name</InfoTitle><Info>김윤경</Info></InfoContainer>
              <InfoContainer><InfoTitle>Birth</InfoTitle><Info>2001.11.20</Info></InfoContainer>
              <InfoContainer><InfoTitle>Address</InfoTitle><Info>경기도 고양시</Info></InfoContainer>
              <InfoContainer><InfoTitle>Phone number</InfoTitle><Info>010-2827-4952</Info></InfoContainer>
            </InfoList>
            <InfoList>
              <InfoContainer><InfoTitle>Email address</InfoTitle><Info>rladbsrud011120@naver.com</Info></InfoContainer>
              <InfoContainer><InfoTitle>Major</InfoTitle><Info style={{marginBottom : '3%'}}>중국학전공 / 디지털경영전공</Info><Info>(고려대학교 세종캠퍼스)</Info></InfoContainer>
            </InfoList>
            <InfoList>
              <InfoContainer>
                <InfoTitle>Github</InfoTitle>
                <Info style={{marginBottom : '3%',}}><text style={{color : Colors.button, fontWeight : 400,}}>소스코드 저장소</text>입니다.</Info>
                <Info onClick={() => window.open('https://github.com/dbsrudrla')} style={{cursor : 'pointer'}}>https://github.com/dbsrudrla</Info>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Velog</InfoTitle>
                <Info style={{marginBottom : '3%',}}><text  style={{color : Colors.button, fontWeight : 400,}}>개발 공부</text>하면서 작성한 블로그입니다.</Info>
                <Info onClick={() => window.open('https://velog.io/@rlddidrod')} style={{cursor : 'pointer'}}>https://velog.io/@rlddidrod</Info>
              </InfoContainer>
            </InfoList>
          </TextList>
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
  width : 70%;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
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
    width : 25%;
  }
  @media screen and (max-width : 400px) {
    width : 45%;
  }
`;
const TextList = styled.div`
  width : 63%;
  margin-top : 7%;
  @media screen and (max-width : 1000px) {
    width : 100%;
  }
`;
const InfoList = styled.div`
  width : 100%;
  margin : 0 auto;
  display : flex;
  flex-direction : row;
  justify-content : space-around;
  align-items : center;
  @media screen and (max-width : 500px) {
    flex-direction : column;
    text-align : center;
  }
`;
const InfoContainer = styled.div`
  width : 100%;
  margin-bottom : 8%;
`;
const InfoTitle = styled.div`
  margin-bottom : 5%;
  font-size : 1.4rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  @media screen and (max-width : 768px) {
    font-size : 1.2rem;
  }
`;
const Info = styled.div`
  font-size : 1.2rem;
  font-weight : 200;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 0.95rem;
  }
`;

export default AboutMe;
