import React from 'react'
import { Link } from 'react-router-dom'
import {Button }from "./Button"

import '../components/style.scss'

function WhyUseDpSection({headline, description, img, imgStart , alt, buttonLabel}) {
    return (
        <>
            <div className="why-use-us-wrapper">
                <div className="container">
                    <div className="row why__use-dp-row" style={{flexDirection:imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col-md-6">
                            <div className="text-wrapper">
                                {headline.split('\n').map(item => <h2 className="">{item}</h2>)}
                                <p>{description}</p>
                                <Link to="/signup">
                                    <Button buttonColor="red">{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-wrapper">
                                <img src={img} alt={alt} className="why-img img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default WhyUseDpSection
