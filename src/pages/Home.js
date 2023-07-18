import React from 'react';
import { Image } from "react-bootstrap";
import "../css/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import Accordion from 'react-bootstrap/Accordion';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () =>{
    return(
        <div>
            <div className="start-head container">
                <div className="part1">
                    <h1>ADVERTEX</h1>
                    <h1>Secure <span className="highlight">IT Solutions</span> for a more secure environment</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className="btn-start">Get Started</button>
                </div>
                <div class="part2">
                    <Image src="img/header.png"/>
                </div>
            </div>
            <div class="">
                <div class="title">
                    <h1>Our Services</h1>
                    <p>The service we offer is specifically designed<br/> 
                        to meet your needs.</p>
                </div>
                <div class="services">
                    <div class="cardd">
                        <div class="card-img">
                            <Image src="img/sevice01.png"/>
                        </div>
                        <div class="card-disc">
                            <h6>Digital Marketing</h6>
                            <p>Google Ads</p>
                            <p>Facebook Ads</p>
                            <p>Instagram Ads</p>
                            <p>Search Engine Optimization</p>
                            <p>Influencer Marketing</p>
                        </div>
                        <div class="card-bottom">
                            <a href="/"><Image src="img/more.png"/></a>
                        </div>
                    </div>
                    <div class="cardd">
                        <div class="card-img">
                            <Image src="img/sevice02.png"/>
                        </div>
                        <div class="card-disc">
                            <h6>Development & Design</h6>
                            <p>Google Ads</p>
                            <p>Facebook Ads</p>
                            <p>Instagram Ads</p>
                            <p>Search Engine Optimization</p>
                            <p>Influencer Marketing</p>
                            
                        </div>
                        <div class="card-bottom">
                            <a href="/"><Image src="img/more.png"/></a>
                        </div>
                    </div>
                    <div class="cardd">
                        <div class="card-img">
                            <Image src="img/service03.png"/>
                        </div>
                        <div class="card-disc">
                            <h6>Software</h6>
                            <p>Google Ads</p>
                            <p>Facebook Ads</p>
                            <p>Instagram Ads</p>
                            <p>Search Engine Optimization</p>
                            <p>Influencer Marketing</p>
                        </div>
                        <div class="card-bottom">
                            <a href="/"><Image src="img/more.png"/></a>
                        </div>
                    </div>
                    <div class="cardd">
                        <div class="card-img">
                            <Image src="img/service04.png"/>
                        </div>
                        <div class="card-disc">
                            <h6>Graphic Design & Branding</h6>
                            <p>Google Ads</p>
                            <p>Facebook Ads</p>
                            <p>Instagram Ads</p>
                            <p>Search Engine Optimization</p>
                            <p>Influencer Marketing</p>
                        </div>
                        <div class="card-bottom">
                            <a href="/"><Image src="img/more.png"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Projects">
                <div class="title-pro">
                    <h1>Our Projects</h1>
                    <p>you can see our projects</p>
                </div>
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
            <div className="strategy">
                <div className="title-pro">
                    <h1>Our Strategy</h1>
                    <p>Amet minim mollit non deserunt ullamco est<br/> sit aliqua dolor</p>
                </div>
                <div className="container-str">
                    <div className="card-strategy">
                        <div className="card-strategy-h">
                            <h1>1</h1>
                        </div>
                        <div className="card-strategy-b">
                            <h2>Collect Ideas</h2>
                            <div></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="card-strategy">
                        <div className="card-strategy-h">
                            <h1>2</h1>
                        </div>
                        <div className="card-strategy-b">
                            <h2>Collect Ideas</h2>
                            <div></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="card-strategy">
                        <div className="card-strategy-h">
                            <h1>3</h1>
                        </div>
                        <div className="card-strategy-b">
                            <h2>Collect Ideas</h2>
                            <div></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="card-strategy">
                        <div className="card-strategy-h">
                            <h1>4</h1>
                        </div>
                        <div className="card-strategy-b">
                            <h2>Collect Ideas</h2>
                            <div></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container Facts">
                <div class="container-facts">
                    <h1>Company Facts</h1>
                    <p>The service we offer is specifically designed<br/>We are proud of our design team</p>
                    <div className="parent-cards-facts">
                        <div className="card-facts">
                            <div>
                                <Image src="img/facts01.png"/>
                            </div>
                            <h1>1000 +</h1>
                            <p>Completed projects</p>
                        </div>
                        <div className="card-facts">
                            <div>
                                <Image src="img/fact02.png"/>
                            </div>
                            <h1>50K +</h1>
                            <p>Happy Customers</p>
                        </div>
                        <div className="card-facts">
                            <div>
                                <Image src="img/facts03.png"/>
                            </div>
                            <h1>20 +</h1>
                            <p>Awards Won</p>
                        </div>
                    </div>
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
            <div class="container questions">
                <div class="title-pro">
                    <h1>Frequently Asked Questions</h1>
                    <p>The service we offer is specifically designed<br/>We are proud of our design team</p>
                </div>
                <div class="container container-ques">
                    <Accordion className="ques-section" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                            <Accordion.Body>
                            Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                                <Accordion.Body>
                                Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                                </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                                <Accordion.Body>
                                Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <Accordion className="ques-section" defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                            <Accordion.Body>
                            Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                                <Accordion.Body>
                                Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                                </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                            <Accordion.Body>
                            Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className="container">
                <div className="Happened">
                    <div className="title-pro">
                        <h1>This Just Happened</h1>
                        <p>We Are Proud Of Our Design Team</p>
                    </div>
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
        </div>
    )
}
export default Home;