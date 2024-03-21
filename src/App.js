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
      <Button onClick={handleScrollTop}>{'🔝'}</Button>
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
  z-index : 1000;
  border-radius : 50%;
  background-color : ${Colors.white};
  cursor: pointer;
  @media screen and (max-width : 1000px) {
    padding : 2%;
  }
  @media screen and (max-width : 500px) {
    padding : 3%;
  }
`;

export default App;
