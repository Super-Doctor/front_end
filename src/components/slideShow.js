import React from 'react';
import './slide.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import one from './slideimg/1.jpg'
import two from './slideimg/2.jpg'
import three from './slideimg/3.jpg'
import four from './slideimg/4.jpg'
import five from './slideimg/5.jpg'
const slideImages = [one, two,three,four,five];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Providing public healthcare facilities with the necessary technology to ensure the best healthcare quality </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Enriching healthcare through knowledge</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Medical application provide healthcare professionals, patients, and the public with a growing number of specialized tools and resources.</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>We defined target audience by the role of thegroup(s) who would use the app as  from the app description</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>We are offering optimal interventional Angiography solutions for all your needs covering clinical fields ranging from interventional radiology and cardiology to electrophysiology and recording to innovative hybrid surgical interventions.</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;