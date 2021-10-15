import React, { Component } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

import './Header.css'
import { Link, BrowserRouter } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    
    };
  

  
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          variant="dark"
          className="navbar-header"
          id="mynav"
   
    
        >
          <BrowserRouter>
            <Container>
             
           
             
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="/">
                    Home
        
                  </Nav.Link>
                
                  <Nav.Link href="/aboutus">
                    About-Us
                    <Link to="/aboutus"></Link>
                  </Nav.Link>
              
                    
                   
            
                </Nav>
           
            </Container>
          </BrowserRouter>
        </Navbar>
      </>
    );
  }
}

export default Header;