import React from 'react'
import { Link } from "react-router-dom"
import {Button }from "./Button"
import "../components/Pricing.scss"

function Pricing({boxShadowCode,buttonColorCode, Color, title, description, plan , buttonLabel, cost}) {
    return (
        <div>
            <div className="pricing_section"  style={{
                backgroundColor:Color,
                 padding:"20px 10px",
                  borderRadius:"6px",
                  boxShadow:boxShadowCode}}>
                <div className="pricing_wrapper">
                    <div className="pricing-card">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <h1>{plan} <sup>{cost}</sup></h1>
                       <Link to='/'> <Button buttonColor={buttonColorCode} >{buttonLabel}</Button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Pricing
