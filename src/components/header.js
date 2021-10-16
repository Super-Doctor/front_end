
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Footer from "./footer";
import './home.css'

import { LoginContext } from '../context/login';
import { When } from 'react-if';



function Header() {
  const Login = useContext(LoginContext)
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

          <When condition={!Login.loggedIn}>
            <Button onClick={Login.toggleLogInState}>Login</Button>
          </When>

          <When condition={Login.loggedIn}>

         
            <Button onClick={Login.logout}>Logout</Button>
          </When>


        </Navbar>

      </Router>
    </div>
  );
}


export default Header;