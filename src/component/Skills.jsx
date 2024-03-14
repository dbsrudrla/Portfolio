import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';
import Images from '../common/\bImages';

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
                <Image src={Images.frontend} style={{width : '60%',}}/>
                <Image src={Images.react} style={{width : '60%',}}/>
                <Image src={Images.reactNative} style={{width : '75%',}}/>
              </Skill>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <SkillTitle>Experienced</SkillTitle>
                <Image src={Images.figma} style={{width : '60%',}}/>
                <Image src={Images.notion} style={{width : '60%',}}/>
                <Row>
                  <Image src={Images.slack}/>
                  <Image src={Images.space}/>
                </Row>
                <Image src={Images.github}/>
              </Skill>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <SkillTitle>Knowledgeable</SkillTitle>
                <Row>
                  <Image src={Images.python}/>
                  <Image src={Images.mysql} style={{width : '50%',}}/>
                </Row>
              </Skill>
              <Skill>
                <SkillTitle>Certification</SkillTitle>
                <Image src={Images.Certification} style={{width : '50%',}}/>
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
const SkillContainer = styled.div`
  width : 30%;
  text-align : center;
`;
const Skill = styled.div`
  width : 100%;
  padding : 7%;
  box-sizing : border-box;
  margin-top : 15%;
  border-radius : 1.5rem;
  background-color : ${Colors.white};
  box-shadow: -10px 10px 8px 0 ${Colors.shadow};
`;
const SkillTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.5rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  color : ${Colors.button};
`;
const Image = styled.img`
  width : 35%;
  margin : 5%;
`;
const Row = styled.div`
  width : 70%;
  display : flex;
  align-items : center;
  justify-content : space-between;
  margin : 0 auto;
`;

export default Skills;
