import React from "react";
import Navbar from "../components/Navabar"
import Foooter from "../components/Footer"
import cap from "../components/assets/cap.png"
import work from "../components/assets/work.png"
import WhyUseDpSection from "../components/WhyUseDpSection";
import Pricing from "../components/Pricing";
import {Button }from "../components/Button"
import { homeObjOne,homeObjTwo ,homeObjThree , pricingObjOne,pricingObjTwo ,pricingObjThree  } from "./Data";


const Homepage = () => {
    return (
        <div className="homepage-style">
            <Navbar />
            <div className="container first-section">
                <div className="row">
                    <div className="col-md-6 caption">
                        <h2>Customize your design; </h2>
                        <p>Dp Generator allows people connect to your brand by customizing their display picture with your design. </p>
                        <button>Learn More</button>
                    </div>
                    <div className="col-md-6 image">
                        <img className="img-fluid " src={cap} alt="an image" />
                    </div>
                </div>
            </div>

            <div className="how-it-works">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text">
                            <h5>How it works</h5>
                            <p>Creat the awesome dp in<br /> different shapes and format</p>
                            <Button buttonColor="red">Get Started</Button>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid " src={work} alt="an image" />
                        </div>
                    </div>
                </div>

            </div>

            <WhyUseDpSection  {...homeObjOne}/>
            <WhyUseDpSection  {...homeObjTwo}/>
            <WhyUseDpSection  {...homeObjThree}/>

            <div className="pricing-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">
                            <h6>Pricing</h6>
                            <h4>Choose the plan that suits you.</h4>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4">
                                    <Pricing  {...pricingObjOne} />
                                </div>
                                <div className="col-md-4">
                                    <Pricing  {...pricingObjTwo} />
                                </div>
                                <div className="col-md-4">
                                    <Pricing  {...pricingObjThree} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Foooter />

        </div>
    );
}

export default Homepage;