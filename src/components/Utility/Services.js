import React from 'react'
import { Image } from 'react-bootstrap'
import Title from './Title'
const Services = ({title,subTitle}) => {
    return (
        <div>
        <Title title={title} subTitle={subTitle}/>
        <div className="container services">
            <div className="cardd">
                <div className="card-img">
                    <Image src="/img/sevice01.png"/>
                </div>
                <div className="card-top">
                    <h6>Digital Marketing</h6>
                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut <br/> enim ad minim veniam</p>
                </div>
                <div className="card-disc">
                    <p>Google Ads</p>
                    <p>Facebook Ads</p>
                    <p>Instagram Ads</p>
                    <p>Search Engine Optimization</p>
                    <p>Influencer Marketing</p>
                </div>
                <div className="card-bottom">
                    <a href=" "><Image src="/img/more.png"/></a>
                </div>
            </div>
            <div className="cardd">
                <div className="card-img">
                    <Image src="/img/sevice02.png"/>
                </div>
                <div className="card-top">
                    <h6>Digital Marketing</h6>
                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut <br/> enim ad minim veniam</p>
                </div>
                <div className="card-disc">
                    <p>Google Ads</p>
                    <p>Facebook Ads</p>
                    <p>Instagram Ads</p>
                    <p>Search Engine Optimization</p>
                    <p>Influencer Marketing</p>
                </div>
                <div className="card-bottom">
                    <a href=" "><Image src="/img/more.png"/></a>
                </div>
            </div>
            <div className="cardd">
                <div className="card-img">
                    <Image src="/img/service03.png"/>
                </div>
                <div className="card-top">
                    <h6>Digital Marketing</h6>
                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut <br/> enim ad minim veniam</p>
                </div>
                <div className="card-disc">
                    <p>Google Ads</p>
                    <p>Facebook Ads</p>
                    <p>Instagram Ads</p>
                    <p>Search Engine Optimization</p>
                    <p>Influencer Marketing</p>
                </div>
                <div className="card-bottom">
                    <a href=" "><Image src="/img/more.png"/></a>
                </div>
            </div>
            <div className="cardd">
                <div className="card-img">
                    <Image src="/img/service04.png"/>
                </div>
                <div className="card-top">
                    <h6>Digital Marketing</h6>
                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut <br/> enim ad minim veniam</p>
                </div>
                <div className="card-disc">
                    <p>Google Ads</p>
                    <p>Facebook Ads</p>
                    <p>Instagram Ads</p>
                    <p>Search Engine Optimization</p>
                    <p>Influencer Marketing</p>
                </div>
                <div className="card-bottom">
                    <a href=" "><Image src="/img/more.png"/></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Services
