import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';
import Images from '../common/Images';

function Skills() {
  return (
    <>
      <Container>
        <Wrapper>
          {/* 제목 */}
          <TitleContainer>
            <Title>Skills</Title>
            <Line/>
          </TitleContainer>
          {/* 내용 */}
          <Section>
            <SkillContainer>
              <Skill>
                <SkillTitle>Strong</SkillTitle>
                <Image src={Images.frontend} ImgSize = '60%' ImgSize2 = '30%'/>
                <Image src={Images.react} ImgSize = '60%' ImgSize2 = '30%'/>
                <Image src={Images.reactNative} ImgSize = '75%' ImgSize2 = '50%'/>
              </Skill>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <SkillTitle>Experienced</SkillTitle>
                <Image src={Images.figma} ImgSize = '60%' ImgSize2 = '30%'/>
                <Image src={Images.notion} ImgSize = '60%' ImgSize2 = '30%'/>
                <Row>
                  <Image src={Images.slack} ImgSize = '35%' ImgSize2 = '25%'/>
                  <Image src={Images.space} ImgSize = '35%' ImgSize2 = '25%'/>
                </Row>
                <Image src={Images.github} ImgSize = '35%' ImgSize2 = '25%'/>
              </Skill>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <SkillTitle>Knowledgeable</SkillTitle>
                <Row>
                  <Image src={Images.python} ImgSize = '35%' ImgSize2 = '25%'/>
                  <Image src={Images.mysql} ImgSize = '50%' ImgSize2 = '40%'/>
                </Row>
              </Skill>
              <Skill>
                <SkillTitle>Certification</SkillTitle>
                <Image src={Images.Certification} ImgSize = '50%' ImgSize2 = '40%'/>
              </Skill>
            </SkillContainer>
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
  width : 75%;
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
  justify-content : space-around;
  @media screen and (max-width : 768px) {
    flex-direction : column;
  }
`;
const SkillContainer = styled.div`
  width : 30%;
  text-align : center;
  @media screen and (max-width : 768px) {
    width : 80%;
    margin : 0 auto;
  }
  @media screen and (max-width : 500px) {
    width : 90%;
    margin : 0 auto;
  }
`;
const Skill = styled.div`
  width : 100%;
  padding : 7%;
  box-sizing : border-box;
  margin-top : 15%;
  border-radius : 1.5rem;
  background-color : ${Colors.white};
  box-shadow: -10px 10px 8px 0 ${Colors.shadow};
  @media screen and (max-width : 768px) {
    margin-top : 10%;
  }
`;
const SkillTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.5rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  color : ${Colors.button};
  @media screen and (max-width : 1200px) {
    font-size : 1.2rem;
  }
  @media screen and (max-width : 768px) {
    font-size : 1.3rem;
  }
`;
const Image = styled.img`
  width : ${(props) => props.ImgSize};
  margin : 5%;
  @media screen and (max-width : 768px) {
    width : ${(props) => props.ImgSize2};
  }
`;
const Row = styled.div`
  width : 70%;
  display : flex;
  align-items : center;
  justify-content : space-between;
  margin : 0 auto;
  @media screen and (max-width : 768px) {
    justify-content : space-around;
  }
`;

export default Skills;
