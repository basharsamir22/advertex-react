import React from 'react'
import { Image } from 'react-bootstrap'
const StartHead = () => {
    return (
        <div className="container start-head">
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
    )
}

export default StartHead
