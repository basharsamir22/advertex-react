import { Image } from "react-bootstrap"
import "../../css/style.css"
const Footer = () =>{
    return (
        <div>
            <div className="ftr">
        <div className="container footer">
            <div className="footer-1">
                <Image src="Img/logofooter.svg" alt=""/>
                <div>
                    <p>Ready to get started?</p>
                    <button>Get started</button>
                </div>
            </div>
            <div className="footer-2">
                <div className="note">
                    <p>Subscribe to our <br/>news letter</p>
                    <div>
                        <form action="">
                            <input type="text" value="Email address" name="" id=""/>
                            <button></button>
                        </form>
                    </div>
                </div>
                <div>
                    <a href="/"><p>Home</p></a>
                    <a href="/about"><p>About Us</p></a>
                    <a href="/services"><p>Services</p></a>
                    <a href="/latestnews"><p>Latest News</p></a>
                </div>
                <div>
                    <p>Help</p>
                    <p>FAQs</p>
                    <a href="/contactus"><p>Contact Us</p></a>
                </div>
                <div className="conacts">
                    <div>
                        <Image src="Img/conaact01.png" alt="p"/>
                        <p>28 Division St, New York, <br/>
                            NY 10002, USA</p>
                    </div>
                    <div>
                        <Image src="Img/conaact02.png" alt="p"/>
                        <p>Email: Startnext@Gmail.Com</p>
                    </div>
                    <div>
                        <Image src="Img/conaact03.png" alt="p"/>
                        <p>Phone: + (321) 984 754</p>
                    </div>
                </div>
            </div>
            <div className="footer-3">
                <div>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <p>© 2022 All rights reserved. bashar.s</p>
                <div>
                    <a href=" "><Image src="Img/facebook.png"></Image></a>
                    <a href=" "><Image src="Img/twitter.png"></Image></a>
                    <a href=" "><Image src="Img/instagram.png"></Image></a>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Footer