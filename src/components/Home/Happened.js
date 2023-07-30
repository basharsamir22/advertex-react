import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../Utility/Title';
import { Image } from 'react-bootstrap';
const Happened = () => {
    return (
        <div className="container">
                <div className="Happened">
                    <Title title="This Just Happened" subTitle="We Are Proud Of Our Design Team."/>
                    <div className="container-swiper">
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
                        className="mySwiperHappen">
                        <SwiperSlide>
                            <div className="swiper-slide-hppend" >
                                <Image src="Img/happend01.png" alt=""/>
                                <p>Techreif  is is transforming and scaling businesses successfully through services</p>
                                <p>Techreif Oct 20, 2022</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-hppend" >
                                <Image src="Img/happend02.png" alt=""/>
                                <p>Techreif  is is transforming and scaling businesses successfully through services</p>
                                <p>Techreif Oct 20, 2022</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-hppend" >
                                <Image src="Img/happend03.png" alt=""/>
                                <p>Techreif  is is transforming and scaling businesses successfully through services</p>
                                <p>Techreif Oct 20, 2022</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-hppend" >
                                <Image src="Img/happend01.png" alt=""/>
                                <p>Techreif  is is transforming and scaling businesses successfully through services</p>
                                <p>Techreif Oct 20, 2022</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
    )
}

export default Happened
