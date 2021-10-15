import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './footer.css'
export default function Footer() {
    return (
        <div>
            <footer>
                <div>
                    <div className="footerLogo">
                        <img src='https://images.vexels.com/media/users/3/216150/isolated/lists/3bba4f96c0e0e2b6a38659dd09f5dcaf-doctor-hero-with-cape-character.png'></img>
                    </div>
                    <div className="contact">
                        <ul>
                       <li>Located: Amman, Jordan</li>     
                       <li>E-mail: doctors@superdoctor.com</li>
                       <li>Phone: 0790783215</li>
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
