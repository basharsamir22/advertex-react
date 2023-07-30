import React from 'react'
import { Image } from 'react-bootstrap'

const StartHead = () => {
    return (
        <div className=" banner-contact">
                <Image className="ban-img" src="/Img/bannerContact.png" alt=""/>
                <div className="desc-banner">
                    <h1 className="h01">Contact with us know</h1>
                    <p  className="bord"></p>
                    <h1 className="h02">We are with you to help you, <br/> just contact us</h1>
                    <div className="desc-banner-con">
                        <div className="card-contact">
                            <Image src="/Img/contact1.svg" alt=""/>
                            <div>
                                <p>Address:</p>
                                <p>28 Division St, New York,<br/>
                                    NY 10002, USA</p>
                            </div>
                        </div>
                        <div className="card-contact">
                            <Image src="/Img/contact2.svg" alt=""/>
                            <div>
                                <p>Email:</p>
                                <p>Startnext@Gmail.Com</p>
                            </div>
                        </div>
                        <div className="card-contact">
                            <Image src="/Img/contact3.svg" alt=""/>
                            <div>
                                <p>Phone:</p>
                                <p>+ (321) 984 75413545</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default StartHead
