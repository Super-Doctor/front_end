
import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Footer from "./footer";
import './home.css'

import { LoginContext } from '../context/login';
import { When } from 'react-if';



function Header() {
  const Login = useContext(LoginContext)
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('user'))
    if (userData) {
      Login.setLoginState(true, userData)
    }

  }, []);
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
          {console.log(Login.loggedIn)}
          <When condition={!Login.loggedIn}>
            <Button onClick={Login.toggleLogInState}>Login</Button>
          </When>

          <When condition={Login.loggedIn}>


            {/* Patient View*/}

            {Login.loggedIn &&
              <>
                <When condition={Login.user.user.roleId == 1}>
                  <div className="dropdown">
                    <Dropdown className="d-inline mx-2" >
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        <img className='userImg'
                          src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'
                          height='20px'
                          width='20px'
                        />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='menuItems'>
                        <Dropdown.Item >{Login.user.user.userName.toUpperCase()}</Dropdown.Item>
                        <Dropdown.Item >Patient Item</Dropdown.Item>
                        <Dropdown.Item >Patient Item</Dropdown.Item>
                        <Button onClick={Login.logout}>Logout</Button>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* <Button onClick={Login.logout}>Logout</Button> */}
                  </div>
                </When>



                {/* Doctor View*/}
                <When condition={Login.user.user.roleId == 2}>
                  <div className="dropdown">
                    <Dropdown className="d-inline mx-2" >
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        <img className='userImg'
                          src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'
                          height='20px'
                          width='20px'
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='menuItems'>
                        <Dropdown.Item href="/profile">{`Dr. ${Login.user.user.userName.toUpperCase()}`}</Dropdown.Item>
                        <Dropdown.Item href="/appointments"> My Appointments </Dropdown.Item>
                        <Dropdown.Item href="/patientslist" >Patients List</Dropdown.Item>
                        <Button onClick={Login.logout}>Logout</Button>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* <Button onClick={Login.logout}>Logout</Button> */}
                  </div>
                </When>
              </>

            }


          </When>


        </Navbar>

      </Router>
    </div>
  );
}


export default Header;