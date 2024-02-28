import React from "react";
import './App.css';
import styled from "styled-components";
import Colors from "./common/Color";
import Header from "./component/Header";
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
      <Button onClick={handleScrollTop}>👆🏻</Button>
      <Header />
      <Contents />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Button = styled.button` 
  width : 3.8%;
  padding : 0.8%;
  position: fixed;
  bottom: 7%;
  right: 5%;
  font-size : 25px;
  color : ${Colors.white};
  z-index: 1000;
  border : none;
  border-radius : 100%;
  background-color : ${Colors.Button};
`;

export default App;
