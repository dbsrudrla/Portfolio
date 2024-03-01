import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Color';

function Career() {
  return (
    <>
      <Container>
        <Wrapper>
          <Section>
            <Image></Image>
            <TextList>
              <Title>Career</Title>
              <InfoList>
                <Info>안녕하세요!</Info>
                <Info>코딩에 대한 흥미 하나로 개발을 시작해서 프론트엔드 개발자를 꿈꾸는 김윤경입니다.</Info>
                <Info>웹 디자인뿐만 아니라 UX/UI디자인도 해 본 경험이 있습니다.</Info>
                <Info>꼼꼼하고, 성실하게 일에 임하는 것이 저의 가장 큰 장점입니다.</Info>
              </InfoList>
            </TextList>
          </Section>
          <Section>
            <Button>More</Button>
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
  margin: 5% 0;
  padding : auto;
`;
const Wrapper = styled.div`
  width : 70%;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  border : 1px solid red;
`;
const Section = styled.div`
  display : flex;
  flex-direction : row;
`;
const Image = styled.div`
  width : 200px;
  height : 200px;
  border-radius : 5%;
  box-shadow: -5px 5px 10px ${Colors.gray};
  background-color : ${Colors.white};
  &:hover {
    transform: translateY(-50px);
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
`;
const InfoList = styled.div`

`;
const Info = styled.div`
  margin-top : 1%;
  font-size : 20px;
  font-family : 'NotoSans';
`;
const Button = styled.div`
  width : 50%;
  border : 1px solid ${Colors.Button};
`;

export default Career;
