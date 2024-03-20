import React from "react";
import styled from "styled-components";
import Colors from "../../common/Color";
import Images from "../../common/Images";

function WeMapModal({WeMapmodalOpen, setWeMapModalOpen}) {
  
  return (
    <>
        <ModalWrapper>
            <ModalTitle>WeMap</ModalTitle>
            {/* 프로젝트 사진 */}
            <Modals>
                <Image src={Images.WeMapArchitecture} />
                {/* 프로젝트 설명 */}
                <ModalInfo>
                    <InfoContainer>
                      <InfoTitle>프로젝트에서 맡은 부분</InfoTitle>
                      <Info style={{fontWeight : 500,}}>1. Web/App 디자인</Info>
                      <Info>Figma로 WeMap의 <text style={{color : Colors.button}}>모든 페이지 디자인</text>을 설계했습니다.</Info>
                      <Info style={{fontWeight : 500,}}>2. 화면 구현 </Info>
                      <Info>설계된 디자인을 참고하여 <text style={{color : Colors.button}}>사이드바, 마이페이지, 위험등급설정, 팝업창</text> 화면을 구현했습니다.</Info>
                      <Info style={{fontWeight : 500,}}>3. 길찾기 선 구현 </Info>
                      <Info>대피소까지의 거리를 나타내는 선을 <text style={{color : Colors.button}}>line polygon 형태</text>로 구현했습니다.</Info>
                      <Info>프로젝트 경험이 얼마 없는 상태에서 시작한 프로젝트라서 2개의 좌표를 직선으로 잇는 line polygon만 구현 성공했습니다.</Info>
                    </InfoContainer>
                </ModalInfo>
            </Modals>
        </ModalWrapper>
    </>
  );
};

function BBModal({BBmodalOpen, setBBmodalOpen}) {

    return (
        <>
            <ModalWrapper>
            <ModalTitle>Buzzer Beater</ModalTitle>
            {/* 프로젝트 사진 */}
            <Modals>
                <Image src={Images.BBArchitecture} />
                {/* 프로젝트 설명 */}
                <ModalInfo>
                  <InfoContainer>
                      <InfoTitle>프로젝트에서 맡은 부분</InfoTitle>
                      <Info style={{fontWeight : 500,}}>1. UX/UI 디자인</Info>
                      <Info>Figma로 Buzzer Beater의 <text style={{color : Colors.button}}>모든 페이지 디자인</text>을 설계했습니다.</Info>
                      <Info style={{fontWeight : 500,}}>2. UI 화면 구현 </Info>
                      <Info>설계된 디자인을 참고하여 <text style={{color : Colors.button}}>로그인, 회원가입, 영입요청함</text> 화면을 구현했습니다.</Info>
                      <Info style={{fontWeight : 500,}}>3. 하단바 구현 </Info>
                      <Info>프로젝트 중간에 디자인 수정을 하면서 생긴 하단바를 구현했습니다.</Info>
                      <Info>하단바에 홈, 농구팟 생성, 영입요청함, 용병 등록, 마이페이지 버튼을 생성하고, 각 버튼에 알맞는 <text style={{color : Colors.button}}>페이지들을 연결</text>했습니다.</Info>
                    </InfoContainer>
                </ModalInfo>
            </Modals>
        </ModalWrapper>
        </>
    );
};

const ModalWrapper = styled.div`
  width : 100%;
  margin-bottom : 5%;
`;
const Modals = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;
const ModalTitle = styled.div`
  margin-bottom : 5%;
  font-size : 2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
`;
const Image = styled.img`
  width : 60%;
  margin : 3%;
  @media screen and (max-width : 1000px) {
    width : 80%;
    margin : 5%;
  }
  @media screen and (max-width : 500px) {
    width : 100%;
    margin : 10%;
  }
`;
const ModalInfo = styled.div`
  width : 100%;
  text-align : start;
`;
const InfoContainer = styled.div`
  width : 100%;
`;
const InfoTitle = styled.div`
  margin-bottom : 3%;
  font-size : 1.2rem;
  font-weight : 700;
  font-family : 'NotoSans';
  @media screen and (max-width : 768px) {
    font-size : 1rem;
  }
`;
const Info = styled.div`
  margin-bottom : 2%;
  font-size : 1.1rem;
  font-weight : 200;
  font-family : 'NotoSans';
  @media screen and (max-width : 1000px) {
    font-size : 0.95rem;
  }
`;

export {WeMapModal, BBModal};