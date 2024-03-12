import React from "react";
import styled from "styled-components";
import Colors from "../common/Color";
import Icons from "../common/Icons";

function Footer() {

  return (
    <Container>
    <Wrapper>
        <List>
            <Button onClick={() => window.open('https://github.com/dbsrudrla')}>{Icons.github}</Button>
            <Button onClick={() => window.open('https://velog.io/@rlddidrod/posts')}>{Icons.velog}</Button>
            <Button onClick={() => window.open('https://www.instagram.com/rladbsrud___')}>{Icons.instagram}</Button>
        </List>
        <Caption>© 2024. Kim Yun Gyung. All rights reserved.</Caption>
    </Wrapper>
    </Container>
  );
};

const Container = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
    background-color : ${Colors.black};
`;
const Wrapper = styled.div`
    width : 50%;
    margin : 1% 0;
    flex-wrap : inherit;
`;
const List = styled.div`
    width : 30%;
    margin : auto;
    margin-bottom : 2%;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;
const Button = styled.div`
    width : 50px;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
    color : ${Colors.block};
    cursor : pointer;
`;
const Caption = styled.div`
    text-align : center;
    font-size : 15px;
    font-family : 'BalooChettan';
    color : ${Colors.block};
`;

export default Footer;
