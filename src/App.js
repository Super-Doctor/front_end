// import React from 'react'
import React, { useContext } from 'react';

import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import SignIn from './components/SignUp-In/SignIn'
import SignUp from './components/SignUp-In/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { When } from 'react-if';
import { LoginContext } from './context/login'
import Departments from './components/Departement/Departments'
import PatientsList from './components/Patients/PatientsList'
import Profile from './components/Profile/Profile'
import Appointments from './components/Appointments/Appointments'
import Auth from './context/auth'



export default class App extends React.Component {
  
  // static logincontext = useContext(LoginContext);
 
  static contextType = LoginContext;

  componentDidMount () {
   let userData = JSON.parse(localStorage.getItem('user'))

  if(userData) {
    this.context.setLoginState(true , userData)

  }

  }

  render() {
    return (
      <div>

        <Router >
          <When condition={!this.context.toggleLogIn } >
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/profile">
                <Profile/>
              </Route>

              <Route path="/appointments">
                <Appointments/>
              </Route>

              <Route path="/patientslist">
              <When condition={this.context.userCapability > 1}>
                  
                <PatientsList/>
                
                {/* <Else>
                    <h2>you don't have a permission to control the settings!</h2>
                  </Else> */}
                </When>
              </Route>
              
              <Route path="/departments">

                <Departments/>

              </Route>

            </Switch>
          </When>
          <When condition={this.context.toggleLogIn}>

            <When condition={!this.context.toggSignUp}>
              <SignIn />
            </When>


            <When condition={this.context.toggSignUp}>
              <SignUp />
            </When>

          </When>
          <Footer />
        </Router>


        {/* <SignUp/> */}

      </div>
    )
  }
}
