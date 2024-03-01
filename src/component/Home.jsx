import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';

function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <Section>
            <Image></Image>
            <TextList>
              <Title>김윤경</Title>
              <Info>
                안녕하세요!
                <br/>
                주니어 개발자 김윤경입니다.
                <br/>
                이중전공 수업 중 웹 프로그래밍 수업을 통해서 코딩에 처음 발을 들이게 되었는데,
                <br/>
                점차 코딩에 흥미가 생겨 프론트엔드 개발자를 꿈꾸게 되었습니다.
                <br/>
                저는 웹 디자인 뿐만 아니라 UX/UI 디자인도 해 본 경험이 있습니다.
                <br/>
                꼼꼼하고, 성실하게 일에 임하는 것이 저의 가장 큰 장점입니다.
              </Info>
            </TextList>
          </Section>
          <Section>
            <Button><Text>More</Text></Button>
          </Section>  
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width : 100vw;
  height : 50vh;
  display : flex;
  margin: 7% 0;
  padding : auto;
`;
const Wrapper = styled.div`
  width : 75%;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  border : 1px solid red;
`;
const Section = styled.div`
  width : 85%;
  margin-bottom : 5%;
  display : flex;
  flex-direction : row;
  border : 1px solid black;
`;
const Image = styled.div`
  width : 200px;
  height : 200px;
  border-radius : 5%;
  box-shadow: -5px 5px 10px ${Colors.gray};
  background-color : ${Colors.white};
  &:hover {
    transform: translateY(-30px);
  };
  cursor : pointer;
`;
const TextList = styled.div`
  width : 70%;
  margin-left : 5%;
  border : 1px solid red;
`;
const Title = styled.div`
  font-size : 30px;
  font-weight : bold;
  font-family : 'NotoSans';
`;
const Info = styled.div`
  margin-top : 1.2%;
  font-size : 18px;
  font-family : 'NotoSans';
  border : 1px solid black;
`;
const Button = styled.div`
  width : 10%;
  justify-content : center;
  align-items : center;
  background-color : ${Colors.Button};
`;
const Text = styled.div`
  margin : 3%;
  font-size : 20px;
  font-weight : bold;
  font-family : 'BalooChettan';
`;

export default Home;
