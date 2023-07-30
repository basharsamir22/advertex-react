import React from "react";
import "../css/style.css"
import BanarHead from "../components/Utility/BanarHead";
import Title from "../components/Utility/Title";
import StartHead from "../components/ContactUs/StartHead";
import Map from "../components/ContactUs/Map";
import Form from "../components/ContactUs/Form";
function ContactUs(){

    return(
        <div>
            <BanarHead title="Contact Us"/>
            <StartHead/>
            <Form/>
            <Map/>
        </div>
    )
}
export default ContactUs 