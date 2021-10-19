import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './footer.css'
import SuperDoctor from '../logo/SuperDoctor-Logo.png'
export default function Footer() {
  return (
    <div>
      <footer>
        <div>
          <div className="footerLogo">
            <img src={SuperDoctor}></img>
          </div>
          <div className="technologies">
            <h2>Technologies used</h2>
            <p>React</p>
            <p>Bootstrap</p>
            <p>Express - axios</p>
            <p>Postgress</p>
            <p>Socket io</p>
            <p>Coffee</p>
          </div>
          <div className="contactLinks">
            <h2>Contact</h2>
            <p>Email</p>
            <p>Buy us a coffee</p>
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
