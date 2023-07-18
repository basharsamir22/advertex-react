import React from 'react';
import { Image } from "react-bootstrap";
import "../css/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
function About() {
    return (
        <div>
            <div className="container about-head">
                <div>
                    <h1>About US</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</p>
                </div>
            </div>
            <div className="container banner">
                <div>
                    <Image src="/Img/aboutHeader.png"></Image>
                </div>
                <div>
                    <h1 className="h01">About The Company</h1>
                    <p className="bord"></p>
                    <h1 className="h02">Secure <span className="highlight">IT Solutions</span> for a more secure environment</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className="container team">
                <div className="title-pro">
                    <h1>Our Awesome Team</h1>
                    <p>You Can See Our Projects</p>
                </div>
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
            <div className="container Customer">
                <div class="title-pro">
                    <h1>Happy Customer</h1>
                    <p>We Are Proud Of Our Design Team</p>
                </div>
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
            <div class="container Facts">
                <div class="container-facts">
                    <div class="title-pro">
                        <h1>Company Facts</h1>
                        <p>The service we offer is specifically designed<br/>We are proud of our design team</p>
                    </div>
                    <div class="parent-cards-facts">
                        <div class="card-facts-about">
                            <h1>1000 +</h1>
                            <p>Completed projects</p>
                            <div></div>
                        </div>
                        <div class="card-facts-about">
                            <h1>10K +</h1>
                            <p>Happy Customers</p>
                            <div class="mid-fact"></div>
                        </div>
                        <div class="card-facts-about">
                            <h1>10K +</h1>
                            <p>Awards Won</p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;