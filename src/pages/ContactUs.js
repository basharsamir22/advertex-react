import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Image } from "react-bootstrap";
import "../css/style.css"
function ContactUs(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });
      const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    
    return(
        <div>
            <div className="container about-head">
                <div>
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</p>
                </div>
            </div>
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
            <div className="container drop">
                <div className="title-pro">
                    <h1>Drop Us a Line</h1>
                    <p>Fill out the contact form and we will get back to you shortly.</p>
                </div>
                <div>
                    <form action="" class="form-cont">
                        <div>
                            <input type="text" placeholder="First Name" class="textareaa"  name="" id="" ></input>
                            <input type="text" placeholder="Last Name" class="textareaa" name="" id="" ></input>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" class="textareaa" name="" id="" ></input>
                            <select name="" id="">
                                <option >Select a department</option>
                            </select>
                        </div>
                        <div>
                            <input className="message" placeholder="Message" name="" id="" cols="30" rows="10"></input>
                        </div>
                        <button>Send Message</button>
                    </form>
                    <div className=" container App">
                        {!isLoaded ? (
                            <h1>Loading...</h1>
                        ) : (
                            <GoogleMap
                            mapContainerClassName="map-container"
                            center={center}
                            zoom={10}
                            >
                            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                            </GoogleMap>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs 