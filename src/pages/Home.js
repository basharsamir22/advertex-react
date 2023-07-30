import React from 'react';
import "../css/style.css"
import 'swiper/css';
import 'swiper/css/pagination';
import Services from '../components/Utility/Services';
import Customer from '../components/Home/Customer';
import Strategy from '../components/Home/Strategy';
import CompanyFacts from '../components/Home/CompanyFacts';
import Questions from '../components/Home/Questions';
import Happened from '../components/Home/Happened';
import StartHead from "../components/Home/StartHead"
const Home = () =>{
    return(
        <div >
            <StartHead/>
            <Services title="Our Services" subTitle="The service we offer is specifically designed to meet your needs."/>
            <Strategy/>
            <CompanyFacts/>
            <Customer/>
            <Questions/>
            <Happened/>
        </div>
    )
}
export default Home;