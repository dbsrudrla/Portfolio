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
              <InfoTitle><Text>꾸미기</Text>와 <Text>꼼꼼함</Text>을 좋아하는</InfoTitle>
              <InfoTitle>
                주니어 개발자 <Text style={{color : Colors.button,}}>김윤경</Text>입니다.
              </InfoTitle>
              <Info style={{marginTop : '5%',}}>
                프론트엔드 개발자를 꿈꾸고 있습니다.
              </Info>
              <Info>
                웹뿐만 아니라 UX / UI 앱 디자인 경험이 있습니다.
              </Info>
              <Info>
                성실하고, 행복하게 일에 임하는 것이 저의 가장 큰 장점입니다.
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
  padding-top : 170px;
  padding-bottom : 5%;
  @media screen and (max-width : 768px) {
    padding-top : 20%;
  }
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
  @media screen and (max-width : 1000px) {
    flex-direction : column;
    align-items : center;
  }
`;
const Image = styled.div`
  width : 20%;
  height : 230px;
  border-radius : 10%;
  box-shadow: -5px 5px 10px ${Colors.shadow};
  background-color : ${Colors.white};
  &:hover {
    transform: translateY(-15px);
  };
  cursor : pointer;
  @media screen and (max-width : 1000px) {
    width : 40%;
    margin-bottom : 5%;
  }
`;
const TextList = styled.div`
  width : 55%;
  margin-left : 5%;
  @media screen and (max-width : 1000px) {
    width : 80%;
    text-align : center;
  }
`;
const InfoTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.8rem;
  font-weight : 600;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 1.3rem;
  }
`;
const Text = styled.text`
  font-size : 2.2rem;
  @media screen and (max-width : 768px) {
    font-size : 1.8rem;
  }
`;
const Info = styled.div`
  margin-top : 2%;
  font-size : 1.2rem;
  font-weight : 300;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 0.95rem;
  }
`;
const Button = styled.div`
  width : 10%;
  margin : 2%;
  padding : 1% 0;
  border-radius : 2rem;
  border : 2px dashed ${Colors.button};
  text-align : center;
  font-size : 1.2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  &:hover {
    background-color : ${Colors.button};
  };
  cursor : pointer;
  @media screen and (max-width : 768px) {
    font-size : 1rem;
    padding : 1% 2%;
    margin : 5%;
  }
`;

export default Home;
