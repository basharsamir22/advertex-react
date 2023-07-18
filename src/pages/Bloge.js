import React from "react";
import { Image } from "react-bootstrap";
import "../css/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
function Blog(){
    return(
        <div>
            <div className="container about-head">
                <div>
                    <h1>Blog Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</p>
                </div>
            </div>
            <div className="discribtion-blog">
                <Image src="/Img/news01.png" alt=""/>
                <div>
                    <button>Digital Marketing</button>
                    <p>Techreif Oct 20, 2022</p>
                </div>
                <h3>Lorem Ipsum Dolor Sit Amet</h3>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nec Et Ipsum Ullamcorper Venenatis Fringilla. Pretium, Purus Eu Nec Vulputate Vel Habitant Egestas. Congue Ornare At Ipsum, Viverra. Vitae Magna Faucibus Eros, Lectus Sociis. Etiam Nunc Amet Id Dignissim. Feugiat Id Tempor Vel Sit In Ornare Turpis Posuere. Eu Quisque Integer Non Rhoncus Elementum Vel. Quis Nec Viverra
                </p>
                <p>Laoreet Mauris Odio Ut Nec. Nisl, Sed Adipiscing Dignissim Arcu Placerat Ornare Pharetra Nec In. Ultrices In Nisl Potenti Vitae Tempus. Auctor Consectetur Luctus Eu In Amet Sagittis. Dis Urna, Vel Hendrerit Convallis Senectus Feugiat Faucibus Commodo Egestas Leo Vitae In Morbi. Enim Arcu Dignissim Mauris, Eu, Eget
                </p>
            </div>
            <div className="container team">
                <div className="title-pro">
                    <h1>Popular Blogs</h1>
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
                                    <Image src="/Img/news01.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Blog Title</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/news01.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Blog Title</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/news04.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Blog Title</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/news03.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Blog Title</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/news02.png"/>
                                </div>
                                <div className="team-card-disc">
                                    <h6>Blog Title</h6>
                                    <p>UI/UX</p>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-slide">
                                <div className="card-img-proj">
                                    <Image src="/Img/news01.png"/>
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
        </div>
    )  
    
};
export default Blog