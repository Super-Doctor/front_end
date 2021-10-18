import React, { Component } from 'react'
import HomeSlides from "./slideShow";
import './home.css'
function Home (){
        return (
            <div className="home">
                <div>
                    <HomeSlides />
                </div>
                <div className='aboutSuperDoctor'>
                    <img
                        src='https://auradirect.be/wp-content/uploads/2017/09/mHealth-tech-2016.gif' />
                    <p>Our medical practice had its beginnings in 1978 with the surgery run by Dr Andrew Ong at Woodpecker Avenue, Willetton. The Pinetree Gully Road surgery was built in 1985, and in 1993 the two surgeries were amalgamated and Southlands Medical Services was formed, a partnership between Dr Andrew Ong, Dr Joseph Thomas and Dr Teong Khoo. The combined surgery was operated at Pinetree Gully Road, and our first computer program was installed.
                        In 2004 the surgery at Shelley previously run by Dr Margaret Russell-Smith was purchased, and after renovations it was re-opened in 2005 as Southlands Medical Services Shelley. The practices were networked, enabling computer access to patient records from both sites, using Genie computer software.

                        The practice is blessed with a very commited team of staff, several of them who have been with the practice for many years.</p>
                </div>
            
            </div>
        )
    
}

export default Home
