import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import Images from "./\bImages";

function WeMapSwipe() {

  return (
    <>
        <Swiper
            effect={'cube'}
            grabCursor={true}
                cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src={Images.WeMapStart} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapLogin} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapSignup} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapHome} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapSidebar} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapMypage} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapAlarm} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapNotice} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapClickIcon} /></SwiperSlide>
            <SwiperSlide><img src={Images.WeMapFindload} /></SwiperSlide>
            </Swiper>
    </>
  );
};

const BuzzerBeaterSwipe = () => {
  
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={Images.BBStart} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBLogin} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBSignup} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBHome} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBCreate} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBList} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBMerc} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBMypage} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBNickname} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBPassword} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBPhysical} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBCheck} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBPosition} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBNotice} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBClickMerc} /></SwiperSlide>
                <SwiperSlide><img src={Images.BBClickList} /></SwiperSlide>
            </Swiper>
        </>
    );
  };

export { WeMapSwipe, BuzzerBeaterSwipe };
