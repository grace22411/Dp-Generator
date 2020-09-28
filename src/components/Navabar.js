import React , {useState, useEffect} from "react"
import '../components/style.scss'
import logo3 from "../components/assets/logo3.png"
import { Link } from "react-router-dom"
import {Button }from "./Button"

const Navbar = () => {
    const [click , setClick] = useState(false);
    const [button , setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize' , showButton)

    return (
        <div className="homepage-style">
            <div className="container header">
                <div className="row">
                    <div className="col-md-2" onClick={closeMobileMenu}>
                        <Link to="/">
                        <img src={logo3} className="img-fluid" alt="Dp Generator logo" />
                        </Link>
                    </div>
                    <div className="col-md-7">
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <Link to="/tutorials" >Tutorials</Link>
                            <Link to="" >Features</Link>
                            <Link to="" >Pricing</Link>
                        </ul>
                    </div>
                    
                    <div className="col-md-3">
                    <Link to="" >Sign In</Link>
                    
                        {button ? (
                            <Link to="/sign-up" className="btn-link">
                                <Button buttonColor="light-blue">Sign up</Button>
                            </Link>
                        ) : <Link to="/sign-up" className="btn-link">
                        <Button buttonColor="blue">Sign up</Button>
                    </Link>}
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <i class="fas fa-times"></i> :  <i class="fas fa-bars"></i> }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
