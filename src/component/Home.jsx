import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';
import profile from '../common/Images/profile.JPG';

function Home() {

  const MoreButton = (e) => {
    const location = document.querySelector('#aboutMe').offsetTop;
    window.scrollTo({top : location - 67, behavior : 'smooth'});
  };

  return (
    <>
      <Container>
      <img src={profile} />
        <Wrapper>
          <Section>
            <TextList>
              <InfoTitle><Text>디자인</Text>과 <Text>꼼꼼함</Text>을 좋아하는</InfoTitle>
              <InfoTitle>
                주니어 개발자 <Text style={{color : Colors.button, fontWeight : 700,}}>김윤경</Text>입니다.
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
  img {
    width : 100%;
    height : 680px;
    margin-top : 5%;
    object-fit : cover;
  }
`;
const Wrapper = styled.div`
  width : 80%;
  margin : 0 3%;
  position : absolute;
  top : 45%;
  @media screen and (max-width : 1000px) {
    top : 55%;
  }
  @media screen and (max-width : 768px) {
    top : 50%;
  }
  @media screen and (max-width : 500px) {
    top : 12%;
  }
`;
const Section = styled.div`
  width : 50%;
  display : flex;
  justify-content : center;
  @media screen and (max-width : 1000px) {
    width : 55%;
  }
  @media screen and (max-width : 768px) {
    width : 70%;
  }
  @media screen and (max-width : 500px) {
    width : 100%;
    justify-content : flex-start;
  }
`;
const TextList = styled.div`
  width : 100%;
  padding : 6%;
  border-radius : 1rem;
`;
const InfoTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.8rem;
  font-weight : 600;
  font-family : 'NotoSans';
  color : ${Colors.white};
  @media screen and (max-width : 1000px) {
    font-size : 1.5rem;
  }
  @media screen and (max-width : 500px) {
    font-size : 0.9rem;
  }
`;
const Text = styled.text`
  font-size : 2.2rem;
  color : ${Colors.white};
  @media screen and (max-width : 1000px) {
    font-size : 1.8rem;
  }
  @media screen and (max-width : 500px) {
    font-size : 1.1rem;
  }
`;
const Info = styled.div`
  margin-top : 2%;
  font-size : 1.2rem;
  font-weight : 300;
  font-family : 'NotoSans';
  color : ${Colors.white};
  @media screen and (max-width : 1000px) {
    font-size : 1rem;
  }
  @media screen and (max-width : 500px) {
    font-size : 0.8rem;
  }
`;
const Button = styled.div`
  width : 20%;
  margin : 2%;
  padding : 2.2% 0;
  border-radius : 2rem;
  background-color : ${Colors.button};
  text-align : center;
  font-size : 1.2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  &:hover {
    background-color : ${Colors.button};
  };
  cursor : pointer;
  @media screen and (max-width : 1000px) {
    font-size : 1rem;
    padding : 3% 2%;
  }
  @media screen and (max-width : 768px) {
    font-size : 0.95rem;
  }
  @media screen and (max-width : 500px) {
    margin : 0 5%;
  }
`;

export default Home;
