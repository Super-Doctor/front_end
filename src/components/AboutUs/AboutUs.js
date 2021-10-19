import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Maram from "./Members/IMG_0502.JPG";
import Ghaidaa from './Members/ghaidaa.jpg'
import mariam from './Members/mariam.PNG'
import Maumon from './Members/Maumon.jpg'
import Ibrahim from './Members/Ibrahim.PNG'
import './AboutUs.css'


export class AboutUs extends React.Component {
  render() {
    return (

      <div className="aboutus">
        <div className="firstSec">
        <div className="container">
        <div className="main-container">
          <div className="imgcontainer">
            <a href="#"><img src={mariam} class="photo" /></a>
          </div>
          <div className="bodycontainer">
            <div className="codycontent">
              <h4 className="name">Mariam Al-shammari</h4>
              <p className="major">
              Computer Science
              </p>
              <ul className="socialmedia">

                <li>
                  <a href=''> <FaGithub /></a>

                </li>
                <li>
                  <a href=''> <FaLinkedinIn /></a>
                </li>

              </ul>

            </div>
          </div>
        </div>


      </div>
      <div className="container">
        <div className="main-container">
          <div className="imgcontainer">
            <a href="#"><img src={Ghaidaa} class="photo" /></a>
          </div>
          <div className="bodycontainer">
            <div className="codycontent">
              <h4 className="name">Ghaidaa Alnattah</h4>
              <p className="major">
              Management information system
              </p>
              <ul className="socialmedia">

              <li>
                      <a href='https://github.com/Ghaidaamoh'> <FaGithub /></a>
                    </li>
                    <li>

                      <a href='https://www.linkedin.com/in/ghaidaa-mohammad'> <FaLinkedinIn /></a>
                    </li>

              </ul>

            </div>
          </div>
        </div>


      </div>
      <div className="container">
        <div className="main-container">
          <div className="imgcontainer">
            <a href="#"><img src={Maram} class="photo" /></a>
          </div>
          <div className="bodycontainer">
            <div className="codycontent">
              <h4 className="name">Maram Abu Murad</h4>
              <p className="major">
                Business Administration
              </p>
              <ul className="socialmedia">

                <li>
                  <a href=''> <FaGithub /></a>

                </li>
                <li>
                  <a href=''> <FaLinkedinIn /></a>
                </li>

              </ul>

            </div>
          </div>
        </div>


      </div>
        </div>
        <div style={{marginLeft:'15%'}} className="secSection">
        <div className="container">
        <div className="main-container">
          <div className="imgcontainer">
            <a href="#"><img src={Maumon} class="photo" /></a>
          </div>
          <div className="bodycontainer">
            <div className="codycontent">
              <h4 className="name">Mamoun Al-shishani</h4>
              <p className="major">
              Management information system
              </p>
              <ul className="socialmedia">

                <li>
                  <a href=''> <FaGithub /></a>

                </li>
                <li>
                  <a href=''> <FaLinkedinIn /></a>
                </li>

              </ul>

            </div>
          </div>
        </div>


      </div>
      <div className="container">
        <div className="main-container">
          <div className="imgcontainer">
            <a href="#"><img src={Ibrahim} class="photo" /></a>
          </div>
          <div className="bodycontainer">
            <div className="codycontent">
              <h4 className="name">Ibrahim Khdairat</h4>
              <p className="major">
                Electrical Engineer
              </p>
              <ul className="socialmedia">

                <li>
                  <a href=''> <FaGithub /></a>

                </li>
                <li>
                  <a href=''> <FaLinkedinIn /></a>
                </li>

              </ul>

            </div>
          </div>
        </div>


      </div>
        </div>
        </div>
    );
  }
}

export default AboutUs;