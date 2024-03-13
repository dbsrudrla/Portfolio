import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';

function Home() {

  const MoreButton = (e) => {
    const location = document.querySelector('#aboutMe').offsetTop;
    window.scrollTo({top : location - 67, behavior : 'smooth'});
  };

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
              </Info>
              <Info>
                <Text>주니어 개발자</Text> 김윤경입니다.
              </Info>
              <Info>
                이중전공 수업 중 웹 프로그래밍 수업을 통해서 코딩에 처음 발을 들이게 되었는데,
              </Info>
              <Info>
                점차 코딩에 흥미가 생겨 <Text>프론트엔드 개발자</Text>를 꿈꾸게 되었습니다.
              </Info>
              <Info>
                저는 <Text>웹 디자인</Text> 뿐만 아니라 <Text>UX/UI 디자인</Text>도 해 본 경험이 있습니다.
              </Info>
              <Info>
                <Text>꼼꼼</Text>하고, <Text>성실</Text>하게 일에 임하는 것이 저의 가장 큰 장점입니다.
              </Info>
            </TextList>
          </Section>
          <Section>
            <Button onClick={MoreButton}>MORE</Button>
          </Section>  
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width : 100%;
  box-sizing : border-box;
  padding-top : 12%;
  padding-bottom : 5%;
`;
const Wrapper = styled.div`
  width : 100%;
`;
const Section = styled.div`
  width : 80%;
  margin : 0 auto;
  display : flex;
  flex-direction : row;
  justify-content : center;
`;
const Image = styled.div`
  width : 20%;
  height : 230px;
  border-radius : 10%;
  box-shadow: -5px 5px 10px ${Colors.shadow};
  background-color : ${Colors.white};
  &:hover {
    transform: translateY(-30px);
  };
  cursor : pointer;
`;
const TextList = styled.div`
  width : 55%;
  margin-left : 5%;
`;
const Title = styled.div`
  margin-bottom : 3%;
  font-size : 2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
`;
const Info = styled.div`
  margin-top : 2%;
  font-size : 1.2rem;
  font-family : 'BalooChettan';
`;
const Text = styled.text`
  font-weight : 500;
  color : ${Colors.button};
`;
const Button = styled.div`
  width : 10%;
  margin : 2%;
  padding : 1% 0;
  border-radius : 2rem;
  text-align : center;
  font-size : 1.2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  background-color : ${Colors.button};
  cursor : pointer;
`;

export default Home;
