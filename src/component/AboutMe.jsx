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
            <Title>About Me</Title>
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
              <InfoContainer><InfoTitle>Major</InfoTitle><Info>중국학전공 / 디지털경영전공</Info><Info>(고려대학교 세종캠퍼스)</Info></InfoContainer>
            </InfoList>
            <InfoList>
              <InfoContainer>
                <InfoTitle>Github</InfoTitle>
                <Info style={{marginBottom : '3%',}}><text style={{color : Colors.red, fontWeight : 400,}}>소스코드 저장소</text>입니다.</Info>
                <Info onClick={() => window.open('https://github.com/dbsrudrla')} style={{cursor : 'pointer'}}>https://github.com/dbsrudrla</Info>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Velog</InfoTitle>
                <Info style={{marginBottom : '3%',}}><text  style={{color : Colors.red, fontWeight : 400,}}>개발 공부</text>하면서 작성한 블로그입니다.</Info>
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
const TextList = styled.div`
  width : 70%;
`;
const InfoList = styled.div`
  width : 90%;
  margin : 0 auto;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
`;
const InfoContainer = styled.div`
  width : 50%;
  margin : 5% 0;
`;
const InfoTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.4rem;
  font-weight : bold;
  font-family : 'BalooChettan';
`;
const Info = styled.div`
  margin-top : 1%;
  font-size : 1.1rem;
  font-weight : 200;
  font-family : 'NotoSans';
`;

export default AboutMe;
