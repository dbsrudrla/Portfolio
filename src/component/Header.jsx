import React from "react";
import styled from "styled-components";
import Colors from "../common/Color";

function Header() {
  
    const handleClickNav = (e) => {
        e.preventDefault(); // 버튼을 눌러도 새로고침되지 않도록 방지하는 역할
        if (e.target.classList.contains("menu-item")) {
            const id = e.target.getAttribute("href"); // id와 같은 이름을 가진 화면 가져오기
            const location = document.querySelector(id).offsetTop;
            window.scrollTo({top : location - 67, behavior : 'smooth'});
        }
    };

  return (
    <div>
      <Container onClick={handleClickNav}>
        <Wrapper>
            <Title>YunGyung's<br/>Portfolio</Title>
            <List>
                <NavList><Button href="#aboutMe" className="menu-item">About me</Button></NavList>
                <NavList><Button href="#skills" className="menu-item">Skills</Button></NavList>
                <NavList><Button href="#projects" className="menu-item">Projects</Button></NavList>
                <NavList><Button href="#career" className="menu-item">Career</Button></NavList>
            </List>
        </Wrapper>
      </Container>
    </div>
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
    box-shadow : 0 0 5px ${Colors.gray};
    background-color : ${Colors.white}; 
`;
const Wrapper = styled.div`
    width : 80%;
    display : flex;
    flex-wrap : inherit;
    align-items : center;
    justify-content : space-between;
`;
const Title = styled.div`
    text-align : center;
    font-weight : bold;
    font-size : 1.5rem;
    font-family : 'BalooChettan';
`;
const List = styled.div`
    width : 45%;
    display : flex;
    justify-content : space-around;
`;
const NavList = styled.li`
    width : 20%;
    text-align : center;
    list-style : none;
`;
const Button = styled.div`  
    font-weight : bold;
    font-size : 1.2rem;
    color : ${Colors.black2};
    font-family : 'BalooChettan';
    cursor : pointer;
    &:hover {
        color : ${Colors.Button};
    }
`;

export default Header;