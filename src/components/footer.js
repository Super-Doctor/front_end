import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './footer.css'
import logo from './slideimg/download.png'

export default function Footer() {
    return (
        <div>
            <footer>
                <div>
                    <div className="footerLogo">
                        <img src={logo}></img>
                    </div>
                    <div className="contact">
                        <ul>
                       <li>Located: Amman, Jordan</li> <br/>
                       <li>E-mail: doctors@superdoctor.com</li> <br/>
                       <li>Phone: 0790783215</li><br/>
                       </ul>
                        

                    </div>
                
                    <div className="followLinks">
                        <p>
                            <FaGithub />
                        </p>
                        <p>
                            <FaFacebookF />
                        </p>
                        <p>
                            <FaLinkedinIn />
                        </p>
                        <p>
                            <FaTwitter />
                        </p>
                    </div>
                </div>

                <div className="copyrightDivContainer">
                    <div className="copyrightDiv">
                        Copyright &copy; 2021 Super Doctor - All Rights Reserved
                    </div>
                </div>
            </footer>
        </div>
    )
}
