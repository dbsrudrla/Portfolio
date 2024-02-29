import React from "react";
import './App.css';
import styled from "styled-components";
import Colors from "./common/Color";
import Header from "./component/Header";
import Contents from "./component/Contents";
import Footer from "./component/Footer";

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
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width : 100vw;
  display : flex;
  flex-direction : column;
  align-items : center;
  background-color : ${Colors.Home};
  border : 2px solid red;
`;
const Button = styled.button` 
  width : 3.8%;
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
