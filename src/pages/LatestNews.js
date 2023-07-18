import React from "react";
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/style.css"
function LatestNews(){
    return(
        <div>
            <div class="container about-head">
                <div>
                    <h1>Latest news</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</p>
                </div>
            </div>
            <div className="container news">
                <div className="types-proj">
                    <p>All</p>
                    <p>Digital Marketing</p>
                    <p>Website development</p>
                    <p>Software</p>
                </div>
                <div className="container text-center">
                    <Container>
                        <Row lg={{ cols: 4 | 'auto' }}>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href="/blog"><Image src="/Img/news03.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news01.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news04.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news01.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news02.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news01.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news04.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news03.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-slide-news">
                                    <div className="card-img-proj">
                                        <a href=" "><Image src="/Img/news02.png"/></a>
                                    </div>
                                    <div className="card-disc-news">
                                        <h6>Blog Title</h6>
                                        <p>UI/UX</p>
                                        <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
} 
export default LatestNews 