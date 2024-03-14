import React from "react";
import styled from "styled-components";
import Colors from "../common/Color";
import { FaBars } from "react-icons/fa";

function Header({isToggleOpen, setIsToggleOpen}) {
  
    const handleClickNav = (e) => {
        e.preventDefault(); // 버튼을 눌러도 새로고침되지 않도록 방지하는 역할
        if (e.target.classList.contains("menu-item")) {
            const id = e.target.getAttribute("href"); // id와 같은 이름을 가진 화면 가져오기
            const location = document.querySelector(id).offsetTop;
            window.scrollTo({top : location - 67, behavior : 'smooth'});
        }
    };

    const onClickToggleHandler = () => {
        setIsToggleOpen(!isToggleOpen);
    };

  return (
    <>
      <Container onClick={handleClickNav}>
        <Wrapper>
            <Title>YunGyung's<br/>Portfolio</Title>
            <ToggleButton onClick={onClickToggleHandler}><FaBars style={{width : '100%',}} /></ToggleButton>
            <List>
                <NavList><Button href="#aboutMe" className="menu-item">About me</Button></NavList>
                <NavList><Button href="#skills" className="menu-item">Skills</Button></NavList>
                <NavList><Button href="#projects" className="menu-item">Projects</Button></NavList>
                <NavList><Button href="#career" className="menu-item">Career</Button></NavList>
            </List>
            {isToggleOpen ? (
                <ColumnList>
                    <NavList><Button href="#aboutMe" className="menu-item">About me</Button></NavList>
                    <NavList><Button href="#skills" className="menu-item">Skills</Button></NavList>
                    <NavList><Button href="#projects" className="menu-item">Projects</Button></NavList>
                    <NavList><Button href="#career" className="menu-item">Career</Button></NavList>
                </ColumnList>
            ) : null}
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
    width : 100vw;
    height : 10%;
    top : 0;
    right : 0;
    left : 0;
    position : fixed;
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
    box-shadow : 0 0 7px ${Colors.shadow};
    background-color : ${Colors.white};
    @media screen and (max-width : 768px) {
        height : auto;
    }
`;
const Wrapper = styled.div`
    width : 80%;
    display : flex;
    flex-wrap : inherit;
    align-items : center;
    justify-content : space-between;
    @media screen and (max-width : 768px) {
        width : 100%;
        justify-content : space-around;
    }
`;
const Title = styled.div`
    text-align : center;
    font-weight : bold;
    font-size : 1.5rem;
    font-family : 'BalooChettan';
    @media screen and (max-width : 768px) {
        padding : 2% 0;
    }
`;
const List = styled.ul`
    width : 45%;
    display : flex;
    justify-content : space-around;
    @media screen and (max-width : 768px){
        display : none;
    }
`;
const ColumnList = styled.div`
    display : none;
    @media screen and (max-width : 768px){
        width : 90%;
        margin : 0 auto;
        display : flex;
        flex-direction : column;
        align-items : center;
        div {
            text-align : center;
            padding-bottom : 3%;
        }
    }
`;
const NavList = styled.li`
    width : 100%;
    text-align : center;
    list-style : none;
`;
const Button = styled.div`  
    font-weight : bold;
    font-size : 1.2rem;
    color : ${Colors.black};
    font-family : 'BalooChettan';
    cursor : pointer;
    &:hover {
        color : ${Colors.button};
    }
`;
const ToggleButton = styled.span`
    display : none;
    top : 40px;
    right : 32px;
    @media screen and (max-width : 768px){
        display : flex;
    }
`;

export default Header;