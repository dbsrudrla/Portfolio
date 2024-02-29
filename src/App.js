import React from "react";
import './App.css';
import styled from "styled-components";
import Colors from "./common/Color";
import Contents from "./component/Contents";

function App() {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Wrapper>
        <Contents />
        <Button onClick={handleScrollTop}>👆🏻</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width : 100vw;
  display : flex;
  flex-direction : column;
  align-items : center;
  background-color : ${Colors.Home};
`;
const Wrapper = styled.div`
  flex : 1;
  margin : 0;
`;
const Button = styled.button` 
  width : 3.8vw;
  padding : 0.8%;
  position : fixed;
  bottom : 7%;
  right : 5%;
  font-size : 25px;
  color : ${Colors.white};
  z-index : 1000;
  border : none;
  border-radius : 100%;
  background-color : ${Colors.Button};
`;

export default App;
