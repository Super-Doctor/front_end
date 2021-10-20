import React, { Component } from 'react'
import HomeSlides from "./slideShow";
import './home.css'
import values from './slideimg/values.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import 'animate.css';
import Slideshow from './slideShow';


function Home() {
    return (
        <div className="home">
            <div>
                <Slideshow />
            </div>
            <h2 className='aboutSD'>About Super Doctor</h2>
            <div className='aboutSuperDoctor'>
                <img
                    src='https://amc-hospital.com/wp-content/uploads/2018/08/about-amc-compressor.jpg' />
                <p>Since its establishment , the Super Doctor has positioned itself among the top medical destinations and one of the leading referral applications for local, regional, and international patients. Super Doctor differentiates it’s self by a relentless drive to provide the highest quality health care for all of its patients.
                    The practice is blessed with a very commited team of staff, several of them who have been with the practice for many years.</p>
            </div>
            <div className='missionAndVision'>
                <div className='vision'>
               
                    <h3 className='ourVision'>Our Vission</h3>
                    <img
                        src='https://amc-hospital.com/wp-content/uploads/2018/08/OUR-VISION_00000.png' />
                    <p>Our vision is to be the premier healthcare provider facility in Jordan in delivering quality and compassionate care patients while maintaining highest medical ethical standards at all times.</p>
                </div>
                <div className='missin'>
                    <h3>Our Mission </h3>

                    <img
                        src='https://amc-hospital.com/wp-content/uploads/2018/08/OUR-MISSION.png' />
                    <p>To provide medical/surgical and diagnostic services to citizens of Jordan and other countries through adopting excellent health care delivery standards, utilizing the latest technology.</p>
                </div>

            </div>


            <div className='values'>
                <h3 className='ourValues' >Our Values</h3>
                <div className='valuesContent'>
                    <ul>
                        <li>Compassion</li>
                        <li>Excellence</li>
                        <li>Teamwork</li>
                        <li>Patient Centered Care</li>
                        <li>Continuous learning</li>
                        <li>High Quality and Safe Care</li>
                    </ul>
                </div>
            </div>


            <div className="visionss" >
                <h3>Providing Top Quality Healthcare</h3>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className='imgStyling' src="https://auradirect.be/wp-content/uploads/2017/09/mHealth-tech-2016.gif" alt="Avatar" />
                        </div>
                        <div class="flip-card-back">
                            <h1>Providing Top Quality Healthcare</h1>
                            <p>Super Doctor’s patients are accommodated by highly qualified and experienced physicians and staff.
                                We pride ourselves with upholding the patient’s health as our first priority and that patient’s excellent experience presides over every medical decision and procedure. The center has achieved a distinguished level of medical services and renowned upscale hospitality services.</p>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className='patStories'>Patient Stories</h3>
            <div className='stories'>
                <Card sx={{ maxWidth: 345 }} className='storiesCard' style={{ border: 'solid #03012C 1px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.prod-carehubs.net/n1/b3bc3802e94679e5/uploads/2021/03/James-Weatherall-3-Use.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Just do it
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: "#03012C", letterSpacing: '1px' }}>
                                “My new primary care physician was shocked that I hadn’t had a colonoscopy yet,” says 62-year-old James Weatherall, who chose UCLA Health for his medical care after moving to Los Angeles.
                                “I went in for my colonoscopy expecting nothing, “My whole world changed.meaning it was larger than they originally thought. It was pure luck that the cancer had not spread to my lymph nodes.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }} className='storiesCard' style={{ border: 'solid #03012C 1px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.prod-carehubs.net/n1/b3bc3802e94679e5/uploads/2021/03/Porchia-Toussaint-4-Use2-1.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ready for ‘All clear’
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: "#03012C", letterSpacing: '1px' }}>
                                “My dad was 54 years old when he passed away,” says Porchia Toussaint, who was 31 when she learned her dad had stage 4 colon cancer.we needed to get follow-up colonoscopies.The actual procedure was fine. They put me to sleep and when I woke up the doctor said, ‘You did great. We didn’t find anything.’ They found two polyps in my brother, which they removed.”</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card sx={{ maxWidth: 345 }} className='storiesCard' style={{ border: 'solid #03012C 1px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='https://cdn.prod-carehubs.net/n1/b3bc3802e94679e5/uploads/2021/03/Cameron-Kalunian-5-Use.jpg'
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Listen to your body
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: "#03012C", letterSpacing: '1px' }}>
                                “I was 35 years old when I started seeing some blood in my stool,” says Cameron Kalunian, whose primary care physician sent Cameron to a gastroenterologist to determine the cause. “They performed a sigmoidoscopy, which is a less invasive test than a colonoscopy. They found a large tumor at my colorectal junction.”
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

        </div>
    )

}

export default Home
