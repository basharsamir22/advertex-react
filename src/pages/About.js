import React from 'react';
import "../css/style.css"
import 'swiper/css';
import 'swiper/css/pagination';
import BanarHead from '../components/Utility/BanarHead';
import Customer from '../components/Home/Customer';
import StartHead from '../components/About/StartHead';
import Team from '../components/About/Team';
import CompanyFacts from '../components/About/CompanyFacts';

function About() {
    return (
        <div>
            <BanarHead title="About US"/>
            <StartHead/>
            <Team/>
            <Customer/>
            <CompanyFacts/>
        </div>
    );
}

export default About;