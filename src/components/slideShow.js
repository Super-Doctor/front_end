import React from 'react';
import { Container, Row, Carousel, Modal, Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import one from './slideimg/1.jpg'
import two from './slideimg/2.jpg'
import three from './slideimg/3.jpg'
import four from './slideimg/4.jpg'
import five from './slideimg/5.jpg'


class HomeSlides extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 "
                            src={one}
                            alt="First slide"
                            height='500'
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }} >
                            <p>Providing public healthcare facilities with the necessary technology to ensure the best healthcare quality </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={two}
                            alt="Second slide"
                            height='500'
                            object-fit='cover'
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                            <p>Enriching healthcare through knowledge</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={three}
                            alt="Third slide"
                            height='500'
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                            <p> Medical application provide healthcare
                                professionals, patients, and the public with a growing
                                number of specialized tools and resources.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={four}
                            alt="Third slide"
                            height='500'
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                            <p>We defined target audience by the role of thegroup(s) who would use the app as  from the app description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={five}
                            alt="Third slide"
                            height='500'
                        />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                            <p>We are offering optimal interventional Angiography solutions for all your needs covering clinical fields ranging from interventional radiology and cardiology to electrophysiology and recording to innovative hybrid surgical interventions.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default HomeSlides;