import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from "react-bootstrap";
import Title from '../Utility/Title';
const Team = () => {
    return (
        <div className="container team">
                <Title title="Our Awesome Team" subTitle="You Can See Our Projects."/>
                <div className='container-swiper'>
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
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        }}
                        className="mySwiperTeam">
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/team01.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Person Name</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/team02.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Person Name</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/team03.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Person Name</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/team04.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Person Name</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/team03.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Person Name</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/team02.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Person Name</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    )
}

export default Team
