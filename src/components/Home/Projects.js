import React from 'react'
import Title from '../Utility/Title'
import { Image } from "react-bootstrap";
import "../css/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Projects = () => {
    return (
        <div class="Projects">
            <Title title="Our Projects" subTitle="you can see our projects."/>
            <div class="types-proj">
                <p>All</p>
                <p>Digital Marketing</p>
                <p>Website development</p>
                <p>Software</p>
            </div>
            <div class="container-proj">
                    <div className="container bodyswap">
                        <Swiper slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                clickable: true,
                                }}
                                breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                                }}
                        
                        className="mySwiper">
                            <SwiperSlide>
                            <div className="card-proj">
                                <div className="card-img-proj">
                                    <Image src="img/proj01.png"/>
                                </div>
                                <div className="card-disc">
                                    <h6>Project Name</h6>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-proj">
                                <div className="card-img-proj">
                                    <Image src="img/proj02.png"/>
                                </div>
                                <div className="card-disc">
                                    <h6>Project Name</h6>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-proj">
                                <Image src="img/proj03.png"/>
                                <div className="card-disc">
                                    <h6>Project Name</h6>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-proj">
                                <div className="card-img-proj">
                                    <Image src="img/proj04.png"/>
                                </div>
                                <div className="card-disc">
                                    <h6>Project Name</h6>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-proj">
                                <div className="card-img-proj">
                                    <Image src="img/proj04.png"/>
                                </div>
                                <div className="card-disc">
                                    <h6>Project Name</h6>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-proj">
                                <div className="card-img-proj">
                                    <Image src="img/proj04.png"/>
                                </div>
                                <div className="card-disc">
                                    <h6>Project Name</h6>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Projects
