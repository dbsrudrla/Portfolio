import React from 'react';
import styled from 'styled-components';
import Colors from '../../common/Color';
import Images from '../../common/Images';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import '../css/swipe.css';
// import required modules
import { Autoplay, EffectFlip, Navigation } from 'swiper/modules';

function WeMapSwipe () {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                effect={'flip'}
                grabCursor={true}
                navigation={true}
                modules={[Autoplay, EffectFlip, Navigation]}
                style={{
                "--swiper-navigation-size" : "30px",
                "--swiper-navigation-sides-offset" : "-50px",
                "--swiper-navigation-color": "#FF986C",
                }}
            >
                <SwiperSlide><Image src={Images.WeMapStart}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapLogin}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapSignup}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapHome}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapSidebar}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapMypage}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapAlarm}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapNotice}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapClickIcon}/></SwiperSlide>
                <SwiperSlide><Image src={Images.WeMapFindload}/></SwiperSlide>
            </Swiper>
        </>
    )
};

function BuzzerBeaterSwipe () {
    return (
        <>
            <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            effect={'flip'}
            grabCursor={true}
            navigation={true}
            modules={[Autoplay, EffectFlip, Navigation]}
            style={{
                "--swiper-navigation-size" : "30px",
                "--swiper-navigation-sides-offset" : "-50px",
                "--swiper-navigation-color": "#FF986C",
            }}
            >
                <SwiperSlide><Image src={Images.BBStart}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBLogin}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBSignup}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBHome}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBCreate}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBList}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBMerc}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBMypage}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBNickname}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBPassword}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBPhysical}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBCheck}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBPosition}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBNotice}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBClickMerc}/></SwiperSlide>
                <SwiperSlide><Image src={Images.BBClickList}/></SwiperSlide>
            </Swiper>
        </>
    )
};

function PortfolioSwipe () {
    return (
        <>
            <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            effect={'flip'}
            grabCursor={true}
            navigation={true}
            modules={[Autoplay, EffectFlip, Navigation]}
            style={{
                "--swiper-navigation-size" : "30px",
                "--swiper-navigation-sides-offset" : "-50px",
                "--swiper-navigation-color": "#FF986C",
            }}
            className='Portfolio'
            >
                <SwiperSlide><Image src={Images.PortfolioStart}/></SwiperSlide>
                <SwiperSlide><Image src={Images.PortfolioID}/></SwiperSlide>
                <SwiperSlide><Image src={Images.PortfolioSkill}/></SwiperSlide>
                <SwiperSlide><Image src={Images.PortfolioProject}/></SwiperSlide>
                <SwiperSlide><Image src={Images.PortfolioArchitect}/></SwiperSlide>
                <SwiperSlide><Image src={Images.PortfolioActivity}/></SwiperSlide>
            </Swiper>
        </>
    )
};

const Image = styled.img`
  width : 80%;
  border-radius : 10px;
  box-shadow: -10px 10px 8px 0 ${Colors.shadow};
`;

export {WeMapSwipe, BuzzerBeaterSwipe, PortfolioSwipe};