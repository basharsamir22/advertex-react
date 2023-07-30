import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
const AllNews = () => {
    return (
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
                                        <a href="/bloge"><Image src="/Img/news03.png"/></a>
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
    )
}

export default AllNews
