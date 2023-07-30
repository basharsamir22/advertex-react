import React from 'react'
import Title from '../Utility/Title'
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Customer = () => {
    return (
        <div className="container Customer">
            <Title title="Happy Customer" subTitle="We Are Proud Of Our Design Team."/>
            <div className="container-swiper2">
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    }}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="swiper-slide2">
                            <Image src="img/customer02.png" alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <Image src="img/customerRate.svg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide2">
                            <Image src="img/customer02.png" alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <Image src="img/customerRate.svg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide2">
                            <Image src="img/customer02.png" alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <Image src="img/customerRate.svg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide2">
                            <Image src="img/customer02.png" alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <Image src="img/customerRate.svg" alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Customer
