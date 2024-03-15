import React from "react";
import styled from "styled-components";
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
                        <InfoTitle>맡은 부분</InfoTitle>
                        <Info>전체적인 디자인과 . . .</Info>
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
                        <InfoTitle>맡은 부분</InfoTitle>
                        <Info>전체적인 디자인과 . . .</Info>
                    </InfoContainer>
                </ModalInfo>
            </Modals>
        </ModalWrapper>
        </>
    );
};

const ModalWrapper = styled.div`
  width : 100%;
  margin-bottom : 3%;
`;
const Modals = styled.div`
  display : flex;
  justify-content : space-around;
`;
const ModalTitle = styled.div`
  margin-bottom : 3%;
  font-size : 2rem;
  font-weight : 700;
  font-family : 'BalooChettan';
`;
const Image = styled.img`
  width : 60%;
`;
const ModalInfo = styled.div`
  width : 35%;
  text-align : start;
`;
const InfoContainer = styled.div`
  width : 100%;
`;
const InfoTitle = styled.div`
  margin-bottom : 5%;
  font-size : 1.2rem;
  font-weight : 700;
  font-family : 'NotoSans';
`;
const Info = styled.div`
  margin-bottom : 5%;
  font-size : 1.1rem;
  font-weight : 200;
  font-family : 'NotoSans';
`;

export {WeMapModal, BBModal};