import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./home";
// import Footer from "./footer";
import './home.css'

function Header () {
    return (
      <div>
        <Router>
          <Navbar>
            <Container>
            <Navbar.Brand href="/">
                <div className="logo">
                  <Link to="/">
                    <img
                      src='https://images.vexels.com/media/users/3/216150/isolated/lists/3bba4f96c0e0e2b6a38659dd09f5dcaf-doctor-hero-with-cape-character.png'
                      style={{ height: "60px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </Navbar.Brand>
              <Navbar.Brand href="/">Super Doctor</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/departments">Departments</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
               
              </Nav>
              
            </Container>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/aboutus">
            </Route>
            <Route path="/departments">
            </Route>
            <Route path="/">            
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }


export default Header;