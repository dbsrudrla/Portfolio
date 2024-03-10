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
                <SkillTitle>Frontend</SkillTitle>
                <Image src={Images.frontend}/>
                <Image src={Images.react}/>
              </Skill>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <SkillTitle>Mobile App</SkillTitle>
                <Image src={Images.reactNative}/>
              </Skill>
              <Skill>
                <SkillTitle>Learned</SkillTitle>
                <Row>
                  <Image src={Images.python} style={{width : '45%',}}/>
                  <Image src={Images.mysql} style={{width : '45%',}}/>
                </Row>
              </Skill>
              <Skill>
                <SkillTitle>Certification</SkillTitle>
                <Image src={Images.Certification} style={{width : '50%',}}/>
              </Skill>
            </SkillContainer>
            <SkillContainer>
              <Skill>
                <SkillTitle>etc.</SkillTitle>
                <Image src={Images.figma}/>
                <Image src={Images.notion}/>
                <Row>
                  <Image src={Images.slack} style={{width : '45%',}}/>
                  <Image src={Images.space} style={{width : '45%',}}/>
                </Row>
                <Image src={Images.github}/>
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
  width : 80%;
  margin : 0 auto;
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
const Section = styled.div`
  display : flex;
  justify-content : space-around;
`;
const SkillContainer = styled.div`
  width : 28%;
  text-align : center;
`;
const Skill = styled.div`
  width : 100%;
  padding : 8%;
  box-sizing : border-box;
  margin-top : 10%;
  border-radius : 1rem;
  background-color : ${Colors.white};
  box-shadow: -10px 10px 8px 0 ${Colors.Shadow};
`;
const SkillTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.5rem;
  font-weight : 700;
  font-family : 'BalooChettan';
  color : ${Colors.Button};
`;
const Image = styled.img`
  width : 70%;
  margin-top : 5%;
`;
const Row = styled.div`
  width : 70%;
  display : flex;
  align-items : center;
  justify-content : space-between;
  margin : 0 auto;
`;

export default Skills;
