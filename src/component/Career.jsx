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

export default Career;
