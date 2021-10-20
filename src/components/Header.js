
import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Footer from "./footer";
import './header.css'
import logo from './slideimg/download.png'
import { LoginContext } from '../context/login';
import { When } from 'react-if';
import menu from './slideimg/menu.png'


function Header() {
  const Login = useContext(LoginContext)



  return (
    <div id='headerBody'>
      <Router>
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <div className="logo">
                <Link to="/">
                  <img
                    src={logo}
                    style={{ height: "60px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Brand className='title' style={{ color: "#56749E", letterSpacing: '2px', marginLeft: '-590px', marginTop: '-20px' }} href="/">Super Doctor</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className='navi' style={{ color: "#56749E", letterSpacing: '2px' }} href="/">Home</Nav.Link>
              <Nav.Link className='navi' style={{ color: "#56749E", letterSpacing: '2px' }} href="/departments">Departments</Nav.Link>
              <Nav.Link className='navi' style={{ color: "#56749E", letterSpacing: '2px' }} href="/aboutus">About Us</Nav.Link>
              {Login.loggedIn && <Nav.Link className='navi' style={{ color: "#56749E", letterSpacing: '2px' }} href="/chat">Chat</Nav.Link>}


            </Nav>

          </Container>
          <When condition={!Login.loggedIn && !Login.user}>

            <Button style={{ backgroundColor: '#56749E' }} className='login' onClick={Login.toggleLogInState}>Login</Button>
          </When>

          <When condition={Login.loggedIn && Login.user}>




            {Login.user && Login.user.user.roleId == 1 &&
              <>
                <div className="dropdown">
                  <Dropdown className="menuButton"  >
                    <Dropdown.Toggle id="dropdown-autoclose-true" style={{ backgroundColor: '#56749E' }}>
                      {/* <img className='userImg'
                        src={menu}
                        height='25px'
                        width='20px'
                      /> */}
                      <img src="https://img.icons8.com/windows/32/000000/user.png"/>
                    </Dropdown.Toggle>
                    <div className='dropdownlist'>
                      <Dropdown.Menu className='menuItems'>
                        <Dropdown.Item className ='dropdownlistitem' href="/profile">{Login.user.user.userName.toUpperCase()}</Dropdown.Item>
                        <Dropdown.Item className ='dropdownlistitem' href="/myRecords" >My Records</Dropdown.Item>
                        <Dropdown.Item className ='dropdownlistitem' href="/patientsAppointment" >My Appointments</Dropdown.Item>

                        <Button style={{ backgroundColor: '#56749E' }} className='logout' onClick={Login.logout}>Logout</Button>
                      </Dropdown.Menu>
                    </div>
                  </Dropdown>

                </div>
              </>
            }


            {Login.user && Login.user.user.roleId == 2 &&
              <>
                <div className="dropdown">
                  <Dropdown className="d-inline mx-2"  >
                    <Dropdown.Toggle id="dropdown-autoclose-true" style={{ backgroundColor: '#56749E' }}>
                      {/* <img className='userImg'
                        src={menu}
                        width='20px'
                        height='25px'

                      /> */}
                      <img src="https://img.icons8.com/windows/32/000000/user.png"/>
                    </Dropdown.Toggle>
                    <div className ='dropdownlist'>
                    <Dropdown.Menu className='menuItems'>
                      <Dropdown.Item className ='dropdownlistitem' href="/profile">{`Dr. ${Login.user.user.userName.toUpperCase()}`}</Dropdown.Item>
                      <Dropdown.Item className ='dropdownlistitem' href="/appointments"> My Appointments </Dropdown.Item>
                      <Dropdown.Item className ='dropdownlistitem' href="/patientslist" >Patients List</Dropdown.Item>

                      <Button style={{ backgroundColor: '#56749E' }} className='logout' onClick={Login.logout}>Logout</Button>
                    </Dropdown.Menu>
                    </div>
                  </Dropdown>
                </div>
              </>
            }





            {/* <When condition={Login.user.user.roleId == 1}>
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
                  </div>
                </When>



             
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
                  </div>
                </When> */}





          </When>


        </Navbar>

      </Router>
    </div>
  );
}


export default Header;