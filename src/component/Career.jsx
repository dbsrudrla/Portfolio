import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';

function Career() {
  return (
    <>
      <Container>
        <Wrapper>
          {/* 제목 */}
          <TitleContainer>
            <Title>Career</Title>
            <Line/>
          </TitleContainer>
          {/* 내용 */}
          <Section>
            <CareerContainer>
              <Careers>
                <CareerTitle>Activity</CareerTitle>
                <InfoTitle><text style={{color : Colors.Button}}>멋쟁이사자처럼</text> 11기 수료</InfoTitle>
                <Info>대학 창업 & 개발 IT 동아리</Info>
                <Info>2023.03 - 2023.12</Info>
              </Careers>
            </CareerContainer>
            <CareerContainer>
              <Careers>
                <CareerTitle>Awards</CareerTitle>
                <InfoTitle>해커톤 <text style={{color : Colors.Button}}>대상</text> 수상</InfoTitle>
                <Info>2023 SW융합클러스터 2.0 디지털콘텐츠 DX 해커톤</Info>
                <Info>2023.09.23</Info>
              </Careers>
            </CareerContainer>
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
  justify-content : space-around;
`;
const CareerContainer = styled.div`
  width : 45%;
  text-align : center;
`;
const Careers = styled.div`
  width : 100%;
  padding : 8%;
  box-sizing : border-box;
  margin-top : 10%;
  border-radius : 1rem;
  background-color : ${Colors.block};
  box-shadow: -10px 10px 8px 0 ${Colors.Shadow};
`;
const CareerTitle = styled.div`
  margin-bottom : 5%;
  font-size : 1.5rem;
  font-weight : 700;
  font-family : 'BalooChettan';
`;
const InfoTitle = styled.div`
  margin-bottom : 5%;
  font-size : 1.1rem;
  font-weight : 700;
  font-family : 'NotoSans';
`;
const Info = styled.div`
  margin-bottom : 5%;
  font-size : 1rem;
  font-weight : 300;
  font-family : 'NotoSans';
`;

export default Career;
