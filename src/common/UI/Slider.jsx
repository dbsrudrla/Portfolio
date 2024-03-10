import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import Colors from "../Color";
import Images from "../\bImages";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  
  const TOTAL_SLIDES = 2;
  const images = [
    Images.WeMapStart, Images.WeMapLogin, Images.WeMapSignup, 
    Images.WeMapHome, Images.WeMapSidebar, Images.WeMapMypage, 
    Images.WeMapAlarm, Images.WeMapNotice, Images.WeMapClickIcon, Images.WeMapFindload];

  const nextSlide = () => {
      if (currentSlide >= TOTAL_SLIDES) { 
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
  }, [currentSlide]);
return (
    <Container>
      <SliderContainer ref={slideRef}>
        {images.map((img, i) => <Image src={img} key={i} />)}
      </SliderContainer>
      <Button onClick={prevSlide}>{'<'}</Button>
      <Button onClick={nextSlide}>{'>'}</Button>
    </Container>
  );
}

const Image = styled.img`
  width: 100%;
  height: 70vh;
`;

const Container = styled.div`
  width: 30%;
  overflow: hidden;
`;
const Button = styled.button`
  padding : 0.5em 2em;
  color : ${Colors.white};
  border-radius : 1rem;
  border : none;
  background-color : ${Colors.Button};
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;


export default Slider;