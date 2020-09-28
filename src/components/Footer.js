import React , {useState, useEffect} from "react"
import '../components/style.scss'
import logoWhite from "../components/assets/logoWhite.png"
import { Link } from "react-router-dom"
import {Button }from "./Button"


function Footer() {
  return (
    <div className='footer-container'>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-5">
                    <img src={logoWhite}  alt="Dp Generator logo" className="img-fluid"></img>
                    <ul>
                      <li><Link to="/">Featured</Link></li>
                      <li><Link to="/">Pricing</Link></li>
                      <li><Link to="/tutorial">Tutorials</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-7">
                  <h6>Contact Us</h6>
                  <Link to="/"><i class="fab fa-facebook-f"></i></Link>
                  <Link to="/"><i class="fab fa-instagram"></i></Link>
                  <Link to="/"><i class="fab fa-twitter"></i></Link>
                  <Link to="/"><i class="fab fa-linkedin-in"></i></Link>
                  <Link to="/"><i class="fab fa-youtube"></i></Link>
                    
                </div>
                <div className="col-md-5">
                    <h6>Stay in touch</h6>
                    <p>Subscribe to our newsletter to receive news and updates.<br></br> No spaming, we promise.</p>
  <input type="email" placeholder="stay in touch"></input><Button buttonColor="red" >Stay in touch</Button>
                </div>
            </div>
            <div className="row post-footer">
                <div className="col-md-10 col-6">
                    <p>&copy; 2020</p>
                </div>
                <div className="col-md-2 col-6">
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;