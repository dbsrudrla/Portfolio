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
      <Contents />
      <Button onClick={handleScrollTop}>👆🏻</Button>
    </Container>
  );
}

const Container = styled.div`
  width : 100vw;
  display : flex;
  flex-direction : column;
  align-items : center;
`;
const Button = styled.div` 
  padding : 1%;
  position : fixed;
  bottom : 7%;
  right : 5%;
  font-size : 20px;
  color : ${Colors.white};
  z-index : 1000;
  border-radius : 50%;
  border : 3px dashed ${Colors.Button};
  cursor: pointer;
`;

export default App;
