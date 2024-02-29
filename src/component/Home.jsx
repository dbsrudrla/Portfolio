import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';

function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <Image></Image>
          <TextList>
            <Title>김윤경</Title>
            <InfoList>
              <Info>안녕하세요!</Info>
              <Info>코딩에 대한 흥미 하나로 개발을 시작해서 프론트엔드 개발자를 꿈꾸는 김윤경입니다.</Info>
              <Info>또한, 웹/앱 디자인이 가능합니다 !</Info>
              <Info>꼼꼼하고, 성실하게 일에 임하는 것이 저의 가장 큰 장점입니다.</Info>
            </InfoList>
          </TextList>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width : 100%;
  display : flex;
  margin-top : 5%;
  border : 1px solid red;
`;
const Wrapper = styled.div`
  width : 60%;
  padding-top : 3%;
  margin : 0 auto;
  display : flex;
  flex-direction : row;
  justify-content : center;
  align-items : center;
  border : 1px solid red;
`;
const Image = styled.div`
  width : 150px;
  height : 150px;
  border-radius : 5%;
  background-color : ${Colors.white};
`;
const TextList = styled.div`
  width : 100%;
  margin-left : 5%;
`;
const Title = styled.div`
  font-size : 30px;
`;
const InfoList = styled.div`

`;
const Info = styled.div`
  margin-top : 1%;
  font-size : 20px;
  font-family : 'NotoSans';
`;

export default Home;
