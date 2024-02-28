import React from "react";
import styled from "styled-components";
import Colors from "../common/Color";

function Header() {
    return (
      <Container>
        <Wrapper>
            <Title>YunGyung's Portfolio</Title>
            <List>
                <Navigation>
                    <NavList>About me</NavList>
                    <NavList>Skills</NavList>
                    <NavList>Projects</NavList>
                    <NavList>Career</NavList>
                </Navigation>
            </List>
        </Wrapper>
      </Container>
    );
}

const Container = styled.div`
    top : 0;
    right : 0;
    left : 0;
    position : fixed;
    display : flex;
    flex-wrap : wrap;
    background-color : ${Colors.Home};
`;
const Wrapper = styled.div`
    display : flex;
    flex-wrap : inherit;
    align-items : center;
    justify-content : space-between;
`;
const Title = styled.div`
    text-decoration : none;
    white-space : nowrap;
    font-weight : bold;
    font-size : 30px;
`;
const List = styled.div`
    flex-basis : 100%;
    flex-grow : 1;
    align-items : center;
`;
const Navigation = styled.ul`
    display : flex;
    padding-left : 0;
    margin-bottom : 0;
    list-style : none;
`;
const NavList = styled.li`
    width : 100%;
    flex-basis : 0;
    flex-grow : 1;
    text-align : center;
`;
  
export default Header;